const router = require('express').Router();
const perfume = require('./perfume');

router.use("/perfume",perfume); 

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;