const router = require('express').Router();
const dao = require('./dao'); //데이터 모듈 호출

router.get("/", dao.list);
router.post("/", dao.add);
router.delete("/", dao.delete);



router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'board unknown uri ${req.path}'});
})

module.exports = router;