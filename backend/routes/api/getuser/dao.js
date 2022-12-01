const db = require('../../../config/db');
const conn =  db.init();

exports.list = (req,res) => { 
	const { idUser }  = req.query

	conn.query("select * from mydb_mall.User where idUser = ?",[ idUser ],(err,row) => { 
		if(err) throw err;

		res.send({success:true,data:row})
	})
}