require("dotenv").config();

const access_key = process.env.API_ACCESS_KEY;
const secret_key = process.env.API_SECRET_KEY;
const root_uri = process.env.ROOT_URI;

if (!access_key || !secret_key || !root_uri)
	throw new Error("Server Access Key or Secret Key or root uri not set");

export default { access_key, secret_key, root_uri };
