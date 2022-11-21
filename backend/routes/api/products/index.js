const router = require('express').Router();
const dao = require('./dao'); //데이터 모듈 호출


router.get("/:idx", dao.view)

router.post("/",dao.filter);

router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'products unknown uri ${req.path}'});
})

module.exports = router;