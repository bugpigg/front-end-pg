const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 

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

app.post('/add', function(request,response){
    console.log(request.body.title);
    console.log(request.body.date);
    response.send('전송완료');
})