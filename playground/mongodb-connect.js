const Mongoclient=require('mongodb').MongoClient;

Mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>  //TodoApp is database
{
  if(err)
  {
    return console.log('Unable to connect to  MongoDB server');
  }
  console.log("Successfully Connected");

  db.collection('Todo').insertOne({     // Todo is collection(table),documents are the rows(data)
    text:'Something to do',
    completed:false
  },(err,result)=>{
    if(err)
    return console.log('Unable to insert',err);

    console.log(JSON.stringify(result.ops,undefined,2));
  });


  db.collection('Todo1').insert([{
    name:'CHETANA',
    Rollno:334
  },{
    name:'Darshan',
    address:'Aundh'
    }]

  ,(err,result)=>
{
  if(err)
  return console.log("error");

  console.log(JSON.stringify(result.ops,undefined,2));

});
  db.close();
});
