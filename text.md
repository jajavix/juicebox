//testing
//bodyParser
const bodyParser = require ('body-parser');
//curl to test
curl localhost:5000/app
output: {}
//header
curl localhost:5000/app-H "Content-Type: application/json"
nothing happen
//bodyParser>>>JSON object
curl localhost:5000/app-H "Content-Type: application/json" -d '{"key":"value"}'
output: return {key:'value}

//JSON Web Tokens

1. npm install jsonwebtoken
   ..allow us to use its functionality
2. create a jwt folder
3. cd jwt folder>>>touch index.js
   inside index.js
   const jwt = require ('jsonwebtoken');
   const SECRET_INGREDIENT = 'krabby patty':

   function encodeData(data){
   const encoded = jwt.sign(
   data,SECRET_INGREDIENTS
   );
   return encoded;
   }

   function decodeData(encodeData){
   const data = jwt.verify(encodedData, SECRET_INGREDIENT);
   return data;
   }

   module.exports ={
   encodeData,
   decodeData
   }

   terminal:
   #node
   output: welcome to node.js
   #const {encodeData,decodeData} = require('./jwt')
   output:undefined
   //encodeData('original message')
   output>>token
   #decodeData ('token insert')
   output'original message'
   #encodeData ({username: "matt", password:"also matt"})
   output: token
   #decodeData('token') >>check and output is {username: , paswoord, int:''}
   \*encode for privacy and verification, user authontication, only server can read the token
