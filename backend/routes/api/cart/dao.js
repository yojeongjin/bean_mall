const db = require('../../../config/db');
const conn =  db.init();

exports.view = (req,res) => {
  const {} = req.body

	sql = "select * from mydb_mall.User where UserEmail = ? and UserPw = ?";
	conn.query(sql,[ UserEmail, UserPw ],(err,rows)=>{
		if(err) throw err;

    res.send({success:true,data:rows})
	})
}