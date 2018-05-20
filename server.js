const express = require("express")
const path = require("path")
const compression = require("compression")
const infoRouter = require("./routers/infoRouter")
const companyRouter = require("./routers/companyRouter")
const PORT = process.env.PORT || 3000

var app = express()

app.use(compression())
app.use("/api/info/", infoRouter)
app.use("/api/companies", companyRouter)
app.use(
  "/",
  express
    .Router()
    .use(express.static("dist"))
    .use("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./dist", "index.html"))
    })
)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
