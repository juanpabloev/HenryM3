const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/users") {
      res.writeHead(200, { "Content-type": "application/json" });
      const users = [
        { id: 1, name: "Jorge" },
        { id: 2, name: "Ramiro" },
        { id: 3, name: "Dante" },
        { id: 4, name: "Paula" },
      ];
      res.end(JSON.stringify(users));
    }
    if (req.url === "/posts") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Esta es la ruta de posts");
    }
    if (req.url === "/template") {
      res.writeHead(200, { "Content-type": "text/html" });
      let miHtml = fs.readFileSync("./template.html", "utf-8");
      const name = "Paula";

      miHtml = miHtml.replace("{nombre}", name);

      res.end(miHtml);
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      const miHtml = fs.readFileSync("./error.html", "utf-8");
      res.end(miHtml);
    }
  })
  .listen(3001, "localhost");
