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