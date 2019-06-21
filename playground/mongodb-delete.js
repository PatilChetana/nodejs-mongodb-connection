const Mongoclient=require('mongodb').MongoClient;

Mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>  //TodoApp is database
{
  if(err)
  {
    return console.log('Unable to connect to  MongoDB server');
  }
  console.log("Successfully Connected");

/*  db.collection('Todo1').deleteMany({name:'CHETANA'}).then((result1)=>
{
  console.log(result1);
});

  db.collection('Todo1').deleteOne({name:'Darshan'}).then((result)=>
  {
    console.log(result);
  });*/

  db.collection('Todo1').findOneAndDelete({name:'CHETANA'}).then((result)=>
{
  console.log(result);
})

  db.close();
});
