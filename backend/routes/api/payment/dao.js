const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.add = (req,res) => {
	const { imp_uid, merchant_uid, pay_method, paid_amount } = req.body

  sql = "insert into mydb_mall.Payment (imp_uid, merchant_uid, pay_method, paid_amount) values (?, ?, ?, ?)";
  conn.query(sql,[ imp_uid, merchant_uid, pay_method, paid_amount ],(err,rows)=>{
    if(err) throw err;

    res.send({
      success: true,
      data: rows,
      code: 200,
      msg:'결제가 완료되었습니다.'
    })
    
  })
}