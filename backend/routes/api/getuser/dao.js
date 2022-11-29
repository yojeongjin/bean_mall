const db = require('../../../config/db');
const conn =  db.init();

exports.list = (req,res) => { 
	const { idUser }  = req.query

	conn.query("select * from mydb_mall.User where idUser = ?",[ idUser ],(err,row) => { 
		if(err) throw err;

		res.send({success:true,data:row})
	})
}

exports.delete = (req,res) => { 
	const { idUser }  = req.query
	sql = "delete from mydb_mall.Cart where idUser = ? ";
	conn.query(sql,[ idUser ],(err,rows)=>{
		if(err) throw err;

		res.send({success:true, msg:'삭제되었습니다.'})
	})
}
