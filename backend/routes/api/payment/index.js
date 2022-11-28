const router = require('express').Router();
const dao = require('./dao'); //데이터 모듈 호출

router.post("/", dao.add)
router.get("/", dao.list)


router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'payment unknown uri ${req.path}'});
})

module.exports = router;