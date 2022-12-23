const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결


exports.list = (req,res) => {
  const { ProductsFilters, ProductsCategory } = req.query

	sql = "select * from mydb_mall.Products where ProductsFilters = ? or ProductsCategory = ?";
	conn.query(sql,[ProductsFilters, ProductsCategory],(err,row) => {
		if(err) throw err;
		
		res.send({success:true, data:row});
	})
}