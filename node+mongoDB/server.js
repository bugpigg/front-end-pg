// Load configuration from .env
require('dotenv').config({ path: './.env'});

// Load express 
const express = require('express');
const app = express();

// Get MongoDB connection
const { MongoClient } = require('mongodb');
const dbUri = process.env.ATLAS_URI;
const client = new MongoClient(dbUri);

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const db = client.db('todoapp');
const post = db.collection('post');

app.listen(9090, function(){
    console.log('listening on 9090')    
});

app.get('/pet', function(request, response) {
    response.send('펫 용품 쇼핑하는 페이지입니다.')
});

app.get('/beauty', function(request, response) {
    response.send('뷰티 용품 쇼핑하는 페이지입니다.')
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
});

app.get('/write', function(request, response) {
    response.sendFile(__dirname + '/write.html')
});

app.post('/add', async function(request,response){
  post.insertOne(
      {제목: request.body.title, 날짜: request.body.date}
    )
    .then(
      res => console.log('done!'),
      err => console.error(`something went wrong: ${err}`)
    );
    response.send('전송완료') 
});

app.get('/list', async function(request, response){
  const result = await post.find({}).toArray()
  console.log(result)
  response.render("list.ejs", {
    posts: result,
    error: false
  });
})
