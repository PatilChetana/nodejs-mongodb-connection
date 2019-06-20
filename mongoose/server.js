var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');   //dATABASE

var Todo=mongoose.model('Tomongoose',{                  //ORM PATTERN COLLECTION NAME
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:
  {
    type:Boolean,
    default:true
  }

});

var newTodo=new Todo(
  {
    text:'Cokking'
  }
);


newTodo.save().then((doc)=>
{console.log(JSON.stringify(doc,undefined,2));
});
