const db = require('../../../config/db');
const conn =  db.init();

exports.add = (req,res) => {
	url = req.file.location
	const {ProductsCategory, ProductsName, ProductsDes, ProductsUsing, ProductsMain, ProductsFilters, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2 } = req.body

	sql = 
	"insert into mydb_mall.Products (ProductsCategory, ProductsName, ProductsDes, ProductsUsing, ProductsMain, ProductsImg, ProductsFilters, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
	conn.query(sql,
		[ ProductsCategory, ProductsName, ProductsDes, ProductsUsing, ProductsMain, url, ProductsFilters, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2  ],(err,result)=>{
		if(err) throw err;


		return res.send({
			success: true,
			code: 200,
			msg:'상품이 등록되었습니다.'
		})
	})
}

exports.modi = (req,res) => { 
	console.log(req.body)
	url = req.file.location
	const { idProducts, ProductsName, ProductsDes, ProductsUsing, ProductsMain, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2 }  = req.body

	sql = 
	"update mydb_mall.Products set ProductsName = ?, ProductsDes = ?, ProductsUsing = ?, ProductsMain = ?, ProductsImg = ?, ProductsSize1 = ?, ProductsSize2 = ?, ProductsPrice1 = ?, ProductsPrice2 = ? where  idProducts = ?";
	conn.query(sql,
		[ ProductsName, ProductsDes, ProductsUsing, ProductsMain, url, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2, idProducts ],(err,result)=>{
		if(err) throw err;


		return res.send({
			success: true,
			code: 200,
			msg:'상품 수정이 완료되었습니다.'
		})
	})
}