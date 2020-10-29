require ('dotenv').config()

const server = require("./api/server.js");
const secret = process.env.SECRET || "the secret for development"
const port = process.env.PORT || 5000

console.log(secret, port)
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
