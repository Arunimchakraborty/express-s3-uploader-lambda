import express, { Request, Response } from "express";
import config from "../config/config";
import s3bucket from "../services/s3bucket";
const router = express.Router();
const { access_key, secret_key } = config;
const { uploadToS3 } = s3bucket;

router.post("/", async (req: Request, res: Response) => {
  try {

    // Handle the POST request for the /posts route
    // Your logic here...
    const { req_access_key, req_secret_key } = req.headers;

    if (!req_access_key || !req_secret_key) {
      return res.status(400).send({ message: "Access Key and Secret Key not provided" });
    }

    if (req_access_key != access_key) {
      return res.status(400).send({ message: "Access Key does not match" });
    }

    if (req_secret_key != secret_key) {
      return res.status(400).send({ message: "Secret Key does not match" });
    }

    const key: string = req.body.key;
    const body: any = req.body.body;

    if (!key || !body) {
      return res.status(400).send({ message: "Key and Body not set in request body" });
    }

    await uploadToS3(key, body);
    res.status(200).send({ message: "Success" });

  } catch (error) {
    res.status(500).send({ message: error });
  }
});

export default router;
