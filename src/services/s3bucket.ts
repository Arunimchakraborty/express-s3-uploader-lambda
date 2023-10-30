import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import aws from "../config/AWS/aws";
import s3bucket from "../config/AWS/s3bucket";

const { access_key, secret_key } = aws;
const { bucketName } = s3bucket;

const s3Client = new S3Client({
	region: "ap-south-1",
	credentials: {
		accessKeyId: access_key,
		secretAccessKey: secret_key,
	},
});

// console.log(await s3Client.config.region)

async function uploadToS3(key: string, body: any) {
	console.log(`Uploading file ${key} to S3Bucket`);
	await s3Client.send(
		new PutObjectCommand({
			Bucket: bucketName,
			Key: key,
			Body: body,
		})
	);
	console.log(`Uploaded file ${key} to bucket`);
}

export default { uploadToS3 };
