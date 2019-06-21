const {mongoose}=require('./../mongoose/db/mongoose.js');
const {Todo}=require('./../mongoose/models/todo.js')


Todo.remove({}).then((result)=>
{
  console.log(result);
});
