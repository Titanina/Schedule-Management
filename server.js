const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) // 이코드 추가


app.listen(3000, ()=> {
    console.log('포트번호 3000 서버접속')
})

app.get('/proudct', (req, res) => {
// 피라미터 req는 요청, res는 응답
res.send('상품페이지');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/input', (req, res)=> {
    res.sendFile(__dirname + '/input.html')
});












