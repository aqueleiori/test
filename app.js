const http = require("http")
const fs = require("fs")

const req = (req, res) => {
  if(req.url === "/"){
    fs.readFile('./test.html',  (err, file) => {
      res.end(file)
    })
  }
  if(req.url === "/contact"){
    fs.readFile('./contacts.html',  (err, file) => {
      res.end(file)
    })
  }
}

const sv  = http.createServer(req)
sv.listen(3000,() => {console.log("listening")})

