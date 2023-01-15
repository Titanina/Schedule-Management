const express = reequire('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const db = require('./models');

let envFilePath = '';
switch(process.env.NODE_ENV){
  case 'local':
    envFilePath = `${__dirname}/.env local`;
    break;

    case 'development':
      envFilePath = `${__dirname}/.env local`;
      break;
    
      
    case 'production':
        envFilePath = `${__dirname}/.env local`;
        break;
        
    default:
        envFilePath =  '';

}

require('dotenv').config({path : envFilePath});

class App {

  constructor () {
    this.app = express();

    //db 접속(중요)
    this.dbConnection();
    
    // 뷰엔진 셋팅
    this.setViewEngine();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리 추가
    this.setStatic();

    // 로컬 변수
    this.setLocals();

    // 라우팅
    this.getRouting();

    //404 페이지를 찾을수가 없음
    this.status404();

    // 에러 처리
    this.errorHandler();

  }


  //DB접속(쭝요)

   dbConnection() {
    //DB authentication

    db.sequelize.authenticate()
    .then(() => {
      console.log('Connection  has been established successfully.');
    })

    .then(() => {
      console.log('DB Sync complete.');
      return db.sequelize.sync();
    })

    .catch(err => {
      console.error('Unable to connect to the databse:' , err);
    });
   }

   setMiddleWare () {

    // 미들웨어 셋팅

    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({  extended: false}));

   }

   setViewEngine () {

    nunjucks.configure('template', {

      autoescape: true,
      express: this.app

    });

   }

setStatic (){
  this.app.use('/uploads', express.setStatic('uploads'));
}

setLocals() {

  //템플릿 변수
  this.app.use( (req, res, next) => {
    this.app.locals.isLogin = true;
    this.app.locals.req_path = req.path;
    next();
  });

}

getRouting () {
  this.app.use(require(' ./controllers'))
}

status404() {

  this.app.use( ( req, res , _ ) =>  {u
  
    res.status(404). render('common/404.html')

  
 });

 }


  errorHandler() {

  this.app.use( ( req, res , _ ) =>  {
  
    res.status(500). render('common/500.html')

 });


}

}


module.exports = new App().app;

