const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.filter = (req,res) => {
	let filter = req.body.filter
	let category = req.body.category
	let page = req.body.page
	let size = req.body.size

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
	} else if (page, size){
		sql = "select * from mydb_mall.Products order by idProducts asc limit ? , ?";
		conn.query(sql,[page, size],(err,row) => { 
			if(err) throw err;
			res.send({success:true,data:row})
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