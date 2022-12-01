const db = require('../../../config/db');
const conn =  db.init();

exports.view = (req,res) => {
  const { CartName, CartImg, CartFilters, CartSize, CartPrice, CartQuantity, CartProductsId, idUser } = req.body


	sql = "select * from mydb_mall.Cart where CartProductsId = ? and idUser = ? and CartSize = ?";
	conn.query(sql,[ CartProductsId , idUser, CartSize ],(err,rows)=>{
		if(err) throw err;

		if(rows.length === 0) {
			sql = 
			"insert into mydb_mall.Cart(CartName, CartImg, CartFilters, CartSize, CartPrice, CartQuantity, CartProductsId, idUser) values(?,?,?,?,?,?,?,?)";
			conn.query(sql,[CartName, CartImg, CartFilters, CartSize, CartPrice, CartQuantity, CartProductsId, idUser],(err,rows)=>{
				if(err) {
					throw err
				} else {
					conn.query("select * from mydb_mall.Cart where idUser = ? ", [idUser], (err,rows) => { 
						if(err) throw err;
						res.send({
							data: rows.length,
							success:true,        
							code: 200,
							msg:'추가되었습니다.'});
					})
				}
			})
		} else {
			sql = "select CartQuantity from mydb_mall.Cart where CartProductsId = ? and idUser = ? and CartSize = ?";
			conn.query(sql,[ CartProductsId, idUser, CartSize ],(err,rows)=>{
				if(err) throw err;

				if (rows) {
					const addQuantity = Number(rows[0].CartQuantity) + Number(CartQuantity)
					sql = "update mydb_mall.Cart set CartQuantity = '?' where CartProductsId = ? and idUser = ? and CartSize = ?";
					conn.query(sql,[ addQuantity,CartProductsId, idUser, CartSize],(err,rows)=>{
						if(err) {
							throw err;
						} else {
							conn.query("select * from mydb_mall.Cart where idUser = ? ",[idUser],(err,rows) => { 
								if(err) throw err;

								res.send({
									data: rows.length,
									success:true,        
									code: 200,
									msg:'추가되었습니다.'});
							})
						}
					})
				}
			})
		}
	})
}


exports.list = (req,res) => { 
	const { idUser }  = req.query

	conn.query("select * from mydb_mall.Cart where idUser = ?",[ idUser ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}

exports.modi = (req,res) => { 
	const { CartQuantity, idCart }  = req.body
	sql = "update mydb_mall.Cart set CartQuantity = ? where idCart = ?";
	conn.query(sql,[ CartQuantity, idCart],(err,rows)=>{
		if(err) throw err;

		res.send({data: rows, success:true})
	})
}


exports.delete = (req,res) => { 
	const { idCart,idUser }  = req.query
	sql = "delete from mydb_mall.Cart where idCart = ? or idUser = ? ";
	conn.query(sql,[ idCart, idUser ],(err,rows)=>{
		if(err) throw err;

		res.send({data: rows, success:true, msg:'삭제되었습니다.'})
	})
}
