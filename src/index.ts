import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mainRoute from "./routes/mainRoute";
import cors from "cors"
require("dotenv").config();

const app = express();

app.use(cors())

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", mainRoute);

console.log('Loaded Main Route')

app.get("/", (req: Request, res: Response) => {
	res.send("GET request working");
});

module.exports = app;
