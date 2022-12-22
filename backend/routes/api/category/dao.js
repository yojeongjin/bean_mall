const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결


exports.list = (req,res) => {
  const { ProductsFilters } = req.query

	sql = "select * from mydb_mall.Products where ProductsFilters = ? ";
	conn.query(sql,[ProductsFilters],(err,row) => {
		if(err) throw err;
		
		res.send({success:true, data:row});
	})
}