// Load configuration from .env
require('dotenv').config({ path: './.env'});

// Load express 
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Get MongoDB connection
const { MongoClient } = require('mongodb');
const dbUri = process.env.ATLAS_URI;
const client = new MongoClient(dbUri);

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(methodOverride('_method'))


const db = client.db('todoapp');
const post = db.collection('post');
const counter = db.collection('counter');

app.listen(9090, function(){
    console.log('listening on 9090')    
});

app.get('/', function(request, response) {
    response.render("index.ejs")
});

app.get('/write', function(request, response) {
    response.render("write.ejs")
});

app.post('/add', async function(request,response){
  const result = await counter.findOne({ name: '게시물갯수' })
  post.insertOne(
      {_id: result.totalPost+1, 제목: request.body.title, 날짜: request.body.date}
    )
    .then(
      res => console.log('done!'),
      err => console.error(`something went wrong: ${err}`)
    );
  counter.updateOne({name: '게시물갯수'},{$inc : {totalPost:1}}) // operator 활용
         .then(
          res => console.log('done!!'),
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

app.delete('/delete', function(request,response){
  request.body._id = parseInt(request.body._id)
  post.deleteOne(request.body)
    .then(
      res => {
        console.log('Delete done!!')
        res.status(200).send({ message: '성공했습니다!' })
      },
      err => {
        console.error(`something went wrong: ${err}`)
        res.status(400).send({ message: '실패했습니다!'})
    }
    )
})

app.get('/detail/:id', async function(request, response){
  const result = await post.findOne({ _id : parseInt(request.params.id) });
  response.render('detail.ejs', { data : result })
})

app.get('/edit/:id', async function(request, response) {
  const result = await post.findOne({ _id : parseInt(request.params.id) });
  response.render('edit.ejs',{ post : result } )
})

app.put('/edit', function(request, response){
  post.updateOne({ _id: parseInt(request.body.id) }, {$set:{제목: request.body.title , 날짜: request.body.date }})
  .then(
    res => {
      console.log('done!!')
      response.redirect('/list')
    },
    err => console.error(`something went wrong: ${err}`)
  );
})
