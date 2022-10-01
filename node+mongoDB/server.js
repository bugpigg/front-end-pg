// Load configuration from .env
require('dotenv').config({ path: './.env' });

// Load express 
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Get MongoDB connection
const { MongoClient } = require('mongodb');
const dbUri = process.env.ATLAS_URI;
const client = new MongoClient(dbUri);

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(methodOverride('_method'))


const db = client.db('todoapp');
const post = db.collection('post');
const counter = db.collection('counter');
const login = db.collection('login')

app.listen(9090, function () {
  console.log('listening on 9090')
});

app.get('/', function (request, response) {
  response.render("index.ejs")
});

app.get('/write', function (request, response) {
  response.render("write.ejs")
});

app.post('/add', async function (request, response) {
  const result = await counter.findOne({ name: '게시물갯수' })
  post.insertOne(
    { _id: result.totalPost + 1, 제목: request.body.title, 날짜: request.body.date }
  )
    .then(
      res => console.log('done!'),
      err => console.error(`something went wrong: ${err}`)
    );
  counter.updateOne({ name: '게시물갯수' }, { $inc: { totalPost: 1 } }) // operator 활용
    .then(
      res => console.log('done!!'),
      err => console.error(`something went wrong: ${err}`)
    );
  response.send('전송완료')
});

app.get('/list', async function (request, response) {
  const result = await post.find({}).toArray()
  console.log(result)
  response.render("list.ejs", {
    posts: result,
    error: false
  });
})

app.delete('/delete', function (request, response) {
  request.body._id = parseInt(request.body._id)
  post.deleteOne(request.body)
    .then(
      res => {
        console.log('Delete done!!')
        res.status(200).send({ message: '성공했습니다!' })
      },
      err => {
        console.error(`something went wrong: ${err}`)
        res.status(400).send({ message: '실패했습니다!' })
      }
    )
})

app.get('/detail/:id', async function (request, response) {
  const result = await post.findOne({ _id: parseInt(request.params.id) });
  response.render('detail.ejs', { data: result })
})

app.get('/edit/:id', async function (request, response) {
  const result = await post.findOne({ _id: parseInt(request.params.id) });
  response.render('edit.ejs', { post: result })
})

app.put('/edit', function (request, response) {
  post.updateOne({ _id: parseInt(request.body.id) }, { $set: { 제목: request.body.title, 날짜: request.body.date } })
    .then(
      res => {
        console.log('done!!')
        response.redirect('/list')
      },
      err => console.error(`something went wrong: ${err}`)
    );
})

const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');

app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session());

app.get('/login', function (request, response) {
  response.render('login.ejs')
});

app.post('/login', passport.authenticate('local', {
  failureRedirect: '/fail'
}), function (request, response) {
  response.redirect('/')
});

app.get('/mypage', checkLogin, function(request,response){
  console.log(request.user)
  response.render('mypage.ejs', {user: request.user })
});

function checkLogin(request,response,next){
  if(request.user){
    next()
  } else {
    response.send('로그인 안하셨는데요?')
  }
} // 이게 바로 미들웨어이다


passport.use(
  new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false,
  }, async function (입력한아이디, 입력한비번, done) {
    await login.findOne({ id: 입력한아이디 })
      .then(
        결과 => {
          if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
          if (입력한비번 == 결과.pw) {
            return done(null, 결과)
          } else {
            return done(null, false, { message: '비번틀렸어요' })
          }
        },
        에러 => {
          console.error(`something went wrong: ${err}`)
          return done(에러)
        }
      );
  })
);

passport.serializeUser(function(user,done){
  done(null, user.id) // user.id를 기반으로 세션을 만든다.
})
passport.deserializeUser(async function(아이디, done){
  // 세션 아이디로 유저정보를 찾은 후 반환
  const result = await login.findOne({id: 아이디})
  done(null, result)
})

app.get('/search', async (request, response) => {
  var searchCondition = [
    {
      $search: {
        index: 'titleSearch',
        text: {
          query: request.query.value,
          path: '제목'
        }
      }
    }
  ] 
  const result = await post.aggregate(searchCondition).toArray()
  console.log(result)
  response.render('search.ejs', {posts: result})
})
