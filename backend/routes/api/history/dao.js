const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.add = (req,res) => {
	const { history } = req.body
  
  const data = history.map(history => {
    return [history.ProductName, history.ProductImg, history.ProductSize, history.quantity, history.price, history.idUser, history.imp_uid]
  })

  sql = "insert into mydb_mall.History (ProductName, ProductImg, ProductSize, ProductQuantity, ProductPrice, idUser, imp_uid) values ? ";
  conn.query(sql,[ data ],(err,rows)=>{
    if(err) throw err;

    res.send({
      success: true,
      data: rows,
      code: 200
    })
    
  })
}

exports.list = (req,res) => { 
	const { imp_uid }  = req.query

	conn.query("select * from mydb_mall.History where imp_uid = ?",[ imp_uid ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}