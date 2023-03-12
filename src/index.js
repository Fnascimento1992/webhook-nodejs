const express = require("express")
require("dotenv").config()


const callback = require("./routes/callback")

const app = express();

app.use(callback)


app.listen(3000, () => {
  console.log("App listening on port 3000")
})
