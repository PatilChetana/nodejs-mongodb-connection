var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{ //ORM PATTERN COLLECTION(it will create collection named todos (lowercase))
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


module.exports={Todo};
