const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors)
app.listen(() => {console.log("server listening on port 9000")})