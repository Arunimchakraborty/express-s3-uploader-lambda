import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import aws from "../config/AWS/aws";
import s3bucket from "../config/AWS/s3bucket";
import fs from 'fs';

const { access_key, secret_key } = aws;
const { bucketName } = s3bucket;

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});

async function uploadToS3(key: string, body: any) {
	console.log(body)
  console.log(`Uploading file ${key} to S3Bucket`);

  try {
    const fileStream = fs.createReadStream(body); // Assuming body is a file path

    const uploadParams = {
      Bucket: bucketName,
      Key: key,
      Body: fileStream,
    };

    const uploadCommand = new PutObjectCommand(uploadParams);

    await s3Client.send(uploadCommand);

    console.log(`Uploaded file ${key} to bucket`);
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
}

export default s3Client;
