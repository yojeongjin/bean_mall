const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.list = (req,res) => {
	let start = req.body.start
	let limit = req.body.limit

	sql = "select * from mydb_mall.Perfume order by idPerfume asc limit ? , ?";
	conn.query(sql,[start, limit],(err,row) => { 
		if(err) throw err;
		res.send({success:true,data:row})
	})
}
