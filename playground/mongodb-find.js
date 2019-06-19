const Mongoclient=require('mongodb').MongoClient;

Mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>  //TodoApp is database
{
  if(err)
  {
    return console.log('Unable to connect to  MongoDB server');
  }
  console.log("Successfully Connected");

//HELLO CHETANA

  db.collection('Todo').find({     // Todo is collection(table),documents are the rows(data)
    name:'Darshan'
  }).toArray().then((docs)=>
{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    if(err)
    return console.log('Unable to insert',err);

});


  db.close();
});
