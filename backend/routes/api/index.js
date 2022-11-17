const router = require('express').Router();
const perfume = require('./perfume')
const products = require('./products')
const users = require('./users')
const signin = require('./signin')
const cart = require('./cart')
const kakao = require('./kakao')

router.use("/perfume",perfume); 
router.use("/products",products); 
router.use("/users",users); 
router.use("/signin", signin);
router.use("/cart", cart);
router.use("/kakao", kakao);

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;