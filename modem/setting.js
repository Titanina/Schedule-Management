var Sequelize = require('sequelize');
var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');


//개발환경에 맞는 .env 파일 설정
let envFilePath = '';
let filePath = path.join( __dirname, '..', 'app.js' )
switch(process.env .NODE_ENV)
 {
  case 'local' :
    envFilePath = path.join( __dirname, '..', '.env.local' )
    break;

  case 'development' :
    envFilePath = path.join(__dirname, '..', '.env.dev')
    break;

    case 'production' :
      envFilePath = path.join( __dirname, '..', '.env.local' )
      break;

    default:
      envFilePath = '';

}

dotenv.config({path : envFilePath}); //LOAD CONFIG

const sequelize  = new Sequelize( process.env.DATABASE, 
  process.env.DB_USER, process.env.DB_PASS, {
    host : localhost,
    dialect : 'mysql',
    timezone : '+09:00',
    operatorsAliases: Sequelize.Op,
    pool: {
      max : 5,
      min : 0,
      idle : 10000
    }
  });

  let db = [];

  fs.readdirSync(__dirname)
    .filter(file => {
      return file.indexOf('.js')&& file !== 'index.js'
    })

    .forEach(file => {
      var model = sequelize.import(path.join(__dirname,
        file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
  if("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


