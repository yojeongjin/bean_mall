const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.add = (req,res) => {
	const { imp_uid, merchant_uid, pay_method, paid_amount, UserName, UserEmail, Recipient, RecipientNumber, postcode, defaultAdd, detailAdd  } = req.body


  sql = "insert into mydb_mall.Payment (imp_uid, merchant_uid, pay_method, paid_amount, UserName, UserEmail, Recipient, RecipientNumber, postcode, defaultAdd, detailAdd) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(sql,[ imp_uid, merchant_uid, pay_method, paid_amount, UserName, UserEmail, Recipient, RecipientNumber, postcode, defaultAdd, detailAdd ],(err,rows)=>{
    if(err) throw err;

    res.send({
      success: true,
      payment_token: imp_uid,
      data: rows,
      code: 200,
      msg:'결제가 완료되었습니다.'
    })
    
  })
}

exports.list = (req,res) => { 
	const { imp_uid }  = req.query

	conn.query("select * from mydb_mall.Payment where imp_uid = ?",[ imp_uid ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}