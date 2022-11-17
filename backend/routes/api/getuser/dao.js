const db = require('../../../config/db');
const conn =  db.init();

exports.list = (req,res) => { 
	const { userIdx }  = req.query

	conn.query("select * from mydb_mall.User where idUser = ?",[ userIdx ],(err,row) => { 
		if(err) throw err;

		res.send({success:true,data:row})
	})
}