const router = require('express').Router();
const dao = require('./dao');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
require('dotenv').config();


AWS.config.update({
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_PRIVATE_KEY,
  region: process.env.REGION,
})

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    }
  })
})

router.post("/", upload.single('image'), dao.add);

router.all('*',(req, res)=> {
	res.status(404).send({data:req, success:false, msg:'upload unknown uri ${req.path}'});
})

module.exports = router;