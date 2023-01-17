const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

//입력한 데이터를 조회

router.get('/study' , ctrl.get_products );

router.get('/study/write', ctrl.get_products_write );

module.exports = router;


