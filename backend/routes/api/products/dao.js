const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.filter = (req,res) => {
	let { page, size } = req.body

		sql = "select * from mydb_mall.Products order by idProducts asc limit ? , ?";
		conn.query(sql,[page, size],(err,row) => { 
			if(err) throw err;
			res.send({success:true,data:row})
		})
}


exports.view = (req,res) => {
	idx = req.params.idx;

	sql = "select * from mydb_mall.Products where idProducts = ? ";
	conn.query(sql,[idx],(err,row) => {
		if(err) throw err;
		
		res.send({success:true, data:row});
	})
}

exports.list = (req,res) => {
	
	conn.query("select * from mydb_mall.Products",(err,row) => {
		if(err) throw err;
		
		res.send({success:true, data:row});
	})
}