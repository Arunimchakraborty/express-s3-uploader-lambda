import { Request, Response, NextFunction } from "express";

function fileFinder(req: Request, res: Response, next: NextFunction) {
  console.log(req.file)
	const file = req.file;

	if (!file) {
		return res.status(400).send({ message: "No file provided" });
	}

	next();
}

export default fileFinder;
