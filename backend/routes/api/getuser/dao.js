const db = require('../../../config/db');
const conn =  db.init();

exports.list = (req,res) => { 
	const { idUser }  = req.query

	conn.query("select * from mydb_mall.User where idUser = ?",[ idUser ],(err,row) => { 
		if(err) throw err;

		res.send({success:true,data:row})
	})
}

exports.modi = (req,res) => { 
	const { idProducts, ProductsName, ProductsDes, ProductsUsing, ProductsMain, ProductsImg, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2 }  = req.body

	sql = "update mydb_mall.Products set ProductsName = ?, ProductsDes =?, ProductsUsing =?, ProductsMain = ?, ProductsImg = ?, ProductsSize1 = ?, ProductsSize2 = ?, ProductsPrice1 = ?, ProductsPrice2 =? where idProducts = ?" ;
	conn.query(sql,[ProductsName, ProductsDes, ProductsUsing, ProductsMain, ProductsImg, ProductsSize1, ProductsSize2, ProductsPrice1, ProductsPrice2, idProducts ],(err,rows)=>{
		if(err) throw err;
	
		res.send({success:true, msg:'상품 수정이 완료되었습니다.'})
	})
}

