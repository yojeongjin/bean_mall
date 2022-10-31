const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.list = (req,res) => { //리스트 모듈 router 에서 호출
	conn.query("select * from mydb_mall.Products",(err,row) => { //쿼리 실행
		if(err) throw err;
		res.send({success:true,data:row})
	})
}

exports.filter = (req,res) => {
	let filter = req.body.filter
	let category = req.body.category

	if (filter) {
		sql = "select * from mydb_mall.Products where ProductsFilters = ? ";
		conn.query(sql,[filter],(err,rows) => { 
			if(err) throw err;
			res.send({success:true,data:rows})
		})
	} else if (category) {
		sql = "select * from mydb_mall.Products where ProductsCategory = ? ";
		conn.query(sql,[category],(err,rows) => { 
			if(err) throw err;
			res.send({success:true,data:rows})
		})
	}
}


exports.view = (req,res) => {
	idx = req.params.idx;

	sql = "select * from mydb_mall.Products where idProducts = ? ";
	conn.query(sql,[idx],(err,row) => {
		if(err) throw err;
		
		res.send({success:true, data:row});
	})
}