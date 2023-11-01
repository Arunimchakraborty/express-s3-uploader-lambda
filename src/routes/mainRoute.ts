import express, { Request, Response } from "express";
import uploader from "../middlewares/POST/uploader";
import authenticate from "../middlewares/authenticator";
import fileParser from "../middlewares/POST/fileParser";
import config from "../config/config";
const router = express.Router();
const { root_uri } = config;

router.post(
	"/",
	authenticate,
	uploader.single("file"),
	fileParser,
	async (req: any, res: Response) => {
		const file_name = req.file_name;
		res.status(200).send({
			message: "Success",
			url: `${root_uri}${file_name}`,
			file_name: file_name,
		});
	}
);

export default router;
