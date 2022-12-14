const router = require('express').Router();
const perfume = require('./perfume')
const products = require('./products')
const users = require('./users')
const signin = require('./signin')
const cart = require('./cart')
const kakao = require('./kakao')
const getuser = require('./getuser')
const board = require('./board')
const order = require('./order')
const payment = require('./payment')
const history = require('./history')
const upload = require('./upload')
const category = require('./category')

router.use("/perfume",perfume); 
router.use("/products",products); 
router.use("/users",users); 
router.use("/signin", signin);
router.use("/cart", cart);
router.use("/kakao", kakao);
router.use("/getuser", getuser);
router.use("/board", board);
router.use("/order", order);
router.use("/payment", payment);
router.use("/history", history);
router.use("/upload", upload);
router.use("/category", category);

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;