var http = require("http");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

http
  .createServer((req, res) => {
    if (req.url === "/api" || req.url === "/api/") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles));
    }

    if (req.url.substring(0, 5) === "/api/" && req.url.length > 5) {
      let toFound = req.url.split("/").pop();
      let isFounded = beatles.find(
        (beatle) => toFound === encodeURI(beatle.name)
      );
      if (isFounded) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(isFounded));
      } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("Error 404: is not found");
      }
    }
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let indexHtml = fs.readFileSync("./index.html", "utf-8");
      res.end(indexHtml);
    }

    let toFound = req.url.split("/").pop();
    let isFounded = beatles.find(
      (beatle) => toFound === encodeURI(beatle.name)
    );
    if (isFounded) {
      res.writeHead(200, { "Content-Type": "text/html" });
      let templateHtml = fs.readFileSync(`${__dirname}/beatle.html`, "utf-8");

      templateHtml = templateHtml.replace(/{name}/g, isFounded.name);
      templateHtml = templateHtml.replace("{birthdate}", isFounded.birthdate);
      templateHtml = templateHtml.replace("{profilePic}", isFounded.profilePic);

      res.end(templateHtml);
    } else {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Error 404: beatle is not found");
    }
  })
  .listen(3002, "localhost");
