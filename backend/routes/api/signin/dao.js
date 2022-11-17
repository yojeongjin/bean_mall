const db = require('../../../config/db');
const conn =  db.init();
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.view = (req,res) => {
  const { UserEmail, UserPw } = req.body

	sql = "select * from mydb_mall.User where UserEmail = ? and UserPw = ?";
	conn.query(sql,[ UserEmail, UserPw ],(err,rows)=>{
		if(err) throw err;

    if(rows.length === 0) {
      return res.send({
				success: false,
				code: 400,
				msg:'회원정보가 존재하지 않습니다.'
			})
    } else {
      const { idUser,UserName } = rows[0];
      const secret = process.env.SECRETKEY
      
      const token = jwt.sign(
        { idUser: idUser, UserName: UserName },
        secret
      )
      return res.send({
        result: { jwt: token },
        idUser: idUser,
        success: true,
        code: 200,
        msg:'로그인 성공'
      })
    }
	})
}

exports.list = (req,res) => { 
  const { idUser, UserName } = req.verifiedToken

  return res.send({
    result: { idUser: idUser, UserName: UserName },
    success: true,
    code: 200,
    msg:'유효한 토큰입니다.'
  })
}