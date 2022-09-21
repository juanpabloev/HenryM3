var fs = require("fs");
var http = require("http");

var valid = ["/arcoiris", "/code", "/resaca", "/retrato", "/sexy", "/badboy"];
// Escribí acá tu servidor
http
  .createServer((req, res) => {
    if (valid.includes(req.url)) {
      res.writeHead(200, { "Content-type": "image/png" });
      fs.readFile(`./images${req.url}_doge.jpg`, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-type": "text/plain" });
          res.end("Error 404: not found");
        }
        res.end(data);
      });
    }
    // switch (req.url) {
    //   case "/arcoiris":
    //     res.writeHead(200, { "Content-type": "image/png" });
    //     fs.readFile("./images/arcoiris_doge.jpg", (err, data) => {
    //       if (err) throw err;
    //       res.end(data);
    //     });
    //     break;
    //   case "/code":
    //     res.writeHead(200, { "Content-type": "image/png" });
    //     fs.readFile("./images/code_doge.jpg", (err, data) => {
    //       if (err) throw err;
    //       res.end(data);
    //     });
    //     break;
    //   case "/resaca":
    //     res.writeHead(200, { "Content-type": "image/png" });
    //     fs.readFile("./images/resaca_doge.jpg", (err, data) => {
    //       if (err) throw err;
    //       res.end(data);
    //     });
    //     break;
    //   case "/retrato":
    //     res.writeHead(200, { "Content-type": "image/png" });
    //     fs.readFile("./images/retrato_doge.jpg", (err, data) => {
    //       if (err) throw err;
    //       res.end(data);
    //     });
    //     break;
    //   case "/sexy":
    //     res.writeHead(200, { "Content-type": "image/png" });
    //     fs.readFile("./images/sexy_doge.jpg", (err, data) => {
    //       if (err) throw err;
    //       res.end(data);
    //     });
    //   case "/badboy":
    //     res.writeHead(200, { "Content-type": "image/png" });
    //     fs.readFile("./images/badboy_doge.jpg", (err, data) => {
    //       if (err) throw err;
    //       res.end(data);
    //     });
    //     break;
    //   default:
    //     res.writeHead(404, { "Content-type": "text/plain" });
    //     res.end("Error 404: not found");
    //     break;
    // }
  })
  .listen(3001, "localhost");
