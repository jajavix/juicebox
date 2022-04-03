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
   encode for privacy and verification, user authontication, only server can read the token

   //getting token
   curl http://localhost:3000/api/users/login -H "Content-Type: application/json" -X POST -d '{"username": "albert", "password": "bertie99"}'

# {"message":"you're logged in!","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJpYXQiOjE1ODgwNjk3OTcsImV4cCI6MTU4ODY3NDU5N30.xwsxdTFC38eZFTS8h5RMsEgAmz1vw-ZizTka0d-jaYA"}

# Correctly formed request

curl http://localhost:3000/api/posts -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJpYXQiOjE1ODgwNjk3OTcsImV4cCI6MTU4ODY3NDU5N30.xwsxdTFC38eZFTS8h5RMsEgAmz1vw-ZizTka0d-jaYA' -H 'Content-Type: application/json' -d '{"title": "test post", "content": "how is this?", "tags": " #once #twice #happy"}'

# {"id":4,"title":"test post","content":"how is this?","active":true,"tags":[{"id":1,"name":"#happy"},{"id":11,"name":"#once"},{"id":12,"name":"#twice"}],"author":{"id":1,"username":"albert","name":"Newname Sogood","location":"Lesterville, KY"}}

# Missing tags

curl http://localhost:3000/api/posts -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJpYXQiOjE1ODgwNjk3OTcsImV4cCI6MTU4ODY3NDU5N30.xwsxdTFC38eZFTS8h5RMsEgAmz1vw-ZizTka0d-jaYA' -H 'Content-Type: application/json' -d '{"title": "I still do not like tags", "content": "CMON! why do people use them?"}'

# {"id":7,"title":"I still do not like tags","content":"CMON! why do people use them?","active":true,"tags":[{"id":14,"name":""}],"author":{"id":1,"username":"albert","name":"Newname Sogood","location":"Lesterville, KY"}}

# Missing title or content

curl http://localhost:3000/api/posts -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJpYXQiOjE1ODgwNjk3OTcsImV4cCI6MTU4ODY3NDU5N30.xwsxdTFC38eZFTS8h5RMsEgAmz1vw-ZizTka0d-jaYA' -H 'Content-Type: application/json' -d '{"title": "I am quite frustrated"}'

# {"name":"error","message":"null value in column \"content\" violates not-null constraint"}

examples!!

# missing a field

curl http://localhost:3000/api/users/register -H "Content-Type: application/json" -X POST -d '{"username": "syzygy", "password": "stars", "name": "josiah"}'

# successful

curl http://localhost:3000/api/users/register -H "Content-Type: application/json" -X POST -d '{"username": "syzygys", "password": "stars", "name": "josiah", "location": "quebec"}'

# duplicate username

curl http://localhost:3000/api/users/register -H "Content-Type: application/json" -X POST -d '{"username": "syzygys", "password": "stars", "name": "josiah", "location": "quebec"}'å

curl http://localhost:3000/api/users/login -H "Content-Type: application/json" -X POST -d '{"username": "albert", "password": "bertie99"}'
