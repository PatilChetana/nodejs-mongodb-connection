
var _=require('lodash');
var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');

var app=express();
const port=process.env.PORT;
app.use(bodyParser.json());



app.post('/todos',(req,res)=>           // simply create
{
  var newTodo=new Todo({
    text:req.body.text
  });

  newTodo.save().then((doc)=>
{
  res.send(doc);
},(e)=>
{
  res.status(400).send(e);
});

});


app.post('/users',(req,res)=>
{
  var body=_.pick(req.body,['email','password']);
  var user=new User(body);

  user.save().then((user)=>
{
  return user.generateAuthToken();
  //res.send(user);
}).then((token)=>
{
  res.header('x-auth',token).send(user);
}).catch((e)=>
{
  res.status(400).send(e);
})
});











app.get('/todos',(req,res)=>        //get(read) the data from database
{
  Todo.find().then((s)=>
{
  res.send({s});
},(e)=>
{
  res.status(400).send(e);
});


});

app.patch('/todos/:id', (req,res)=>
{
  var id=req.params.id;
  var body=_.pick(req.body,['text','completed']);

if(_.isBoolean(body.completed)&& body.completed)
{
  body.completed=true;
}else {
  body.completed=false;

}


  Todo.findByIdAndUpdate(id, {$set: bodyParser},{new:true}).then((todo)=>
{
  if(!todo)
  {
    return res.status(404).send();
  }
  res.send({todo});
}).catch((e)=>
{
  res.send(404).send();
})
});




app.listen(5000, ()=>
{
  console.log('Started on port 5000');
});
// var newTodo=new Todo(
//   {
//     text:'Cokking'
//   }
// );
//
//
// newTodo.save().then((doc)=>
// {console.log(JSON.stringify(doc,undefined,2));
// });
