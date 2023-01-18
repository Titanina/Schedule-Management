const models = require('../../models');

exports.get_study_write = ( _ , res) => {

  res.render( 'localhost:3000');


}

exports.get_sutdy = ( _ , res) => {
  models.study.findAll({

      //name, createdAt 칼럼만 조회함.
      attributes: ['name', 'createdAt']

  }). then(( products ) => {
    //키 밸류 값이 동일한 경우 key : value 대신 그냥 key값만 써도 된다.
    //res.render ('localhost:3000' , {study : study});
    //localhost:3000에 study라는 이름으로 데이터를 조회한 study 객체를 전달
    res.render('localhost:3000', {study});
  })
}


