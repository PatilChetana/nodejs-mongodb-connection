const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');


var data={
  id:10
};


var token=jwt.sign(data,'123abc');
console.log(token);
var decoded=jwt.verify(token,'123abc');

// var msg="This is User ";
// var hash=SHA256(msg).toString();
//
// console.log(`message: ${msg}`);
// console.log(hash);
//
//
// var data={
//   id:4
// };
//
// var token={
//   data,
//   hash:SHA256(JSON.stringify(data)+ 'somesecret').toString()     //object to string
// }
//
// //token.data.id=5;
//
// var resulthash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if(resulthash===token.hash)
// {
//   console.log('Data is safe not changed');
// }
// else {
//   console.log("Beware Data Changed");
// }
