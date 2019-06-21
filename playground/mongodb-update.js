const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>  //TodoApp is database
{
  if(err)
  {
    return console.log('Unable to connect to  MongoDB server');
  }
  console.log("Successfully Connected");

  db.collection('Todo1').findOneAndUpdate({
    name:'Chetana'
  },{
    $set:
    {
      name:'CHETANA'
    }
  }).then((result)=>
{
  console.log(result);
});






  db.close();
});
