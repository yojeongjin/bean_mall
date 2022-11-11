const db = require('../../../config/db');
const conn =  db.init();

exports.view = (req,res) => {
  const {CartName, CartImg, CartFilters, CartSize, CartPrice, CartQuantity, CartProductsId } = req.body


	sql = "select * from mydb_mall.Cart where CartProductsId = ? ";
	conn.query(sql,[ CartProductsId ],(err,rows)=>{
		if(err) throw err;

		if(rows.length === 0) {
			sql = 
			"insert into mydb_mall.Cart(CartName, CartImg, CartFilters, CartSize, CartPrice, CartQuantity, CartProductsId) values(?,?,?,?,?,?,?)";
			conn.query(sql,[CartName, CartImg, CartFilters, CartSize, CartPrice, CartQuantity, CartProductsId],(err,rows)=>{
				if(err) throw err;
		
				res.send({
					success:true,        
					code: 200,
					msg:'추가되었습니다.'});
			})
		} else {
			sql = "select CartQuantity from mydb_mall.Cart where CartProductsId = ? ";
			conn.query(sql,[ CartProductsId ],(err,rows)=>{
				if(err) throw err;

				if (rows) {
					const addQuantity = Number(rows[0].CartQuantity) + Number(CartQuantity)
					sql = "update mydb_mall.Cart set CartQuantity = '?' where CartProductsId = ? ";
					conn.query(sql,[addQuantity,CartProductsId],(err,rows)=>{
						if(err) throw err;
						
						res.send({
							success:true,        
							code: 200,
							msg:'추가되었습니다.'});
					})
				}
			})
		}
	})
}
