import express, { Request, Response } from "express";
import config from "../config/config";
import uploader from "../services/uploader";
import authenticate from "../services/authenticator";
import fileParser from "../services/fileParser";
const router = express.Router();
const { access_key, secret_key } = config;

router.post(
	"/",
  authenticate,
	uploader.single("file"),
  fileParser,
	async (req: Request, res: Response) => {
		res.status(200).send({ message: "Success" });
	}
);

export default router;
