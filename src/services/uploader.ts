import multerS3 from "multer-s3";
import multer from "multer";
import s3client from "./s3bucket";
import s3bucket from "../config/AWS/s3bucket";

const { bucketName } = s3bucket;

const uploader = multer({
	storage: multerS3({
		s3: s3client,
		bucket: bucketName,
		metadata: function (req, file, cb) {
			cb(null, {
				fieldName: file.fieldname,
				contentType: file.mimetype, // Add the MIME type (image type) to the metadata
			});
		},
		key: function (req, file, cb) {
			cb(null, `${Date.now().toString()}.jpg`);
		},
	}),
});

export default uploader;
