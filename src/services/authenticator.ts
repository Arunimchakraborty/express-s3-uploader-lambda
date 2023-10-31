import config from "../config/config";
import { Request, Response, NextFunction } from "express";

const { access_key, secret_key } = config;

function authenticate(req: Request, res: Response, next: NextFunction) {
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

  next()
}

export default authenticate