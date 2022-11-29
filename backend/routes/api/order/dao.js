const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.add = (req,res) => {
  const {orders} = req.body
  
  const value = orders.map(order => {
    return [order.idUser, order.CartProductsId, order.CartQuantity, order.CartPrice, order.CartName, order.CartSize, order.CartImg]
  })
  sql = "insert into mydb_mall.Order (idUser, idProducts, quantity, price, ProductName, ProductSize, ProductImg) values ? ";
  
  conn.query(sql,[value],(err,rows)=>{
    if(err) throw err;
    
    return res.send({
      success: true,
      data: rows,
      code: 200,
    })
  })
}

exports.list = (req,res) => { 
	const { idUser }  = req.query

	conn.query("select * from mydb_mall.Order where idUser = ?",[ idUser ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}

exports.delete = (req,res) => { 
	const { idUser }  = req.query
	sql = "delete from mydb_mall.Order where idUser = ? ";
	conn.query(sql,[ idUser ],(err,rows)=>{
		if(err) throw err;

		res.send({success:true, msg:'삭제되었습니다.'})
	})
}
