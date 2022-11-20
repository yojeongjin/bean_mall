const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결

exports.add = (req,res) => {
	const { BoardTitle, BoardContents, UserName, idUser } = req.body

  sql = "insert into mydb_mall.Board (BoardTitle, BoardContents, BoardWriter, idUser) values (?, ?, ?, ?)";
  conn.query(sql,[ BoardTitle, BoardContents, UserName, idUser ],(err,rows)=>{
    if(err) throw err;

    res.send({
      success: true,
      code: 200,
      msg:'문의사항이 등록되었습니다.'
    })
    
  })
}

exports.list = (req,res) => { 
	conn.query("select * from mydb_mall.Board",(err,row) => { 
		if(err) throw err;

		res.send({success:true,data:row})
	})
}