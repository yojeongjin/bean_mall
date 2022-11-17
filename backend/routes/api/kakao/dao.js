const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결
const axios = require('axios');

const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.list = async (req, res) => {
  const { access_token } = req.query;
  let UserEmail = ''
  let UserName = ''

  try {
    const res = await axios.get('https://kapi.kakao.com/v2/user/me',
    {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
      }
    })
    UserEmail = res.data.kakao_account.email
    UserName = res.data.properties.nickname
  } catch(error) {
    console.log(error)
  }
  sql = "select * from mydb_mall.User where UserEmail = ? ";
  conn.query(sql, [UserEmail],(err,rows) => { 
    if(err) throw err;

    if(rows.length === 0) {
      sql = "insert into mydb_mall.User (UserEmail, UserName) values (?, ?)";
      conn.query(sql,[UserEmail, UserName],(err,rows)=>{
        if(err) throw err; 

        const idUser = rows.idUser;
        const secret = process.env.SECRETKEY

        const token = jwt.sign(
          { idUser: idUser, UserName: UserName },
          secret 
        )
  
        return res.send({
          result: { jwt: token },
          data: rows,
          success: true,
          code: 200,
          msg:'회원가입 성공!'
        })
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
        data: rows,
        success: true,
        code: 200,
        msg:'로그인 성공'
      })
    }
  })
}
