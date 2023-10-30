require('dotenv').config()

const access_key = process.env.AWS_access_key
const secret_key = process.env.AWS_secret_key

if (!access_key || !secret_key) throw new Error("AWS Access Key or Secret Key not set")

export default {
  access_key: access_key,
  secret_key: secret_key
}