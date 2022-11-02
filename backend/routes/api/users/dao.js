const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.add = (req,res) => {

	const { UserEmail, UserPw, UserRePw, UserName } = req.body

  if (UserPw === UserRePw) {
    sql = "insert into mydb_mall.User (UserEmail, UserPw, UserRePw, UserName) values (?, ?, ?, ?)";
    conn.query(sql,[UserEmail, UserPw, UserRePw, UserName],(err,rows)=>{
      if(err) throw err;

      const userIdx = rows.insertId;
      const secret = process.env.SECRETKEY

      const token = jwt.sign(
        { userIdx: userIdx, UserName: UserName },
        secret 
      )

      res.send({
        result: { jwt: token },
        success: true,
        code: 200,
        msg:'회원가입 성공.'
      })
    })
  } else {
    res.send({
      success: false,
      code: 400,
      message: '비밀번호가 일치하지 않습니다.'
    })
  }
}