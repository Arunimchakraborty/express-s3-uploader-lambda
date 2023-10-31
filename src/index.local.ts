import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mainRoute from "./routes/mainRoute";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", mainRoute);

app.get("/", (req: Request, res: Response) => {
	res.send("GET request working");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
