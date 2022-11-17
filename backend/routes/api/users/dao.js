const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.add = (req,res) => {
	const { UserEmail, UserPw, UserRePw, UserName } = req.body

  const UserEmailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const UserPwRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  if(!UserEmailRegExp.test(UserEmail)) {
    return res.send({
      success: false,
      code: 400,
      msg: '잘못된 형식의 이메일 주소입니다.'
    })
  }

  if(!UserPwRegExp.test(UserPw)) {
    return res.send({
      success: false,
      code: 400,
      msg: '비밀번호는 8자리 이상 16자리 이하 영문+숫자+특수문자(혼합)만 사용 가능합니다.'
    })
  }


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
        userIdx: userIdx,
        success: true,
        code: 200,
        msg:'회원가입 성공! 추가 정보를 입력해주세요.'
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

exports.list = (req,res) => {
  const { UserEmail } = req.query;

  const UserEmailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if(!UserEmailRegExp.test(UserEmail)) {
    return res.send({
      success: false,
      code: 400,
      msg: '잘못된 형식의 이메일 주소입니다.'
    })
  }

  sql = "select * from mydb_mall.User where UserEmail = ? ";
  conn.query(sql, [UserEmail],(err,rows) => { 
    if(err) throw err;
    
    if(rows.length === 0) {
      res.send({
        data: rows,
        success: true,
        code: 200,
        msg:'사용 가능한 이메일입니다.'
      })
    } else {
      res.send({
        data: rows,
        success: false,
        code: 400,
        msg:'이미 사용 중인 이메일입니다.'
      })
    }
  })

}



exports.modi = (req,res) => { 
	const { UserPostCode, UserDefault, UserDetail, UserPhone, UserPhoneMid, UserPhoneEnd, idUser }  = req.body
	sql = "update mydb_mall.User set UserPostCode = ?,UserDefault = ?, UserDetail = ?, UserPhone = ?,  UserPhoneMid = ?, UserPhoneEnd = ? where idUser = ?";
	conn.query(sql,[ UserPostCode, UserDefault, UserDetail, UserPhone, UserPhoneMid, UserPhoneEnd, idUser ],(err,rows)=>{
		if(err) throw err;

    res.send({
      data: rows,
      success: true,
      code: 200,
      msg:'회원가입이 완료되었습니다.'
    })
	})
}
