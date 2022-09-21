const fs = require("fs");
const request = require("request");

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

function date() {
  done(Date());
}

function pwd() {
  done(process.cwd());
}

function ls() {
  fs.readdir(".", (err, files) => {
    if (err) throw err;
    done(files.join("\n"));
  });
}

function cat(filename) {
  fs.readFile(filename, "utf8", (err, file) => {
    if (err) throw err;
    done(file);
  });
}

function head(filename) {
  fs.readFile(filename, "utf8", (err, file) => {
    if (err) throw err;
    done(file.split("\n").splice(0, 5).join("\n"));
  });
}
function tail(filename) {
  fs.readFile(filename, "utf8", (err, file) => {
    if (err) throw err;
    done(file.split("\n").splice(-5).join("\n"));
  });
}

function echo(data) {
  done(data);
}

function curl(web) {
  request("http://" + web, (err, response, body) => {
    if (err) throw err;
    done(body);
  });
}

module.exports = {
  date,
  pwd,
  ls,
  echo,
  cat,
  head,
  tail,
  curl,
};
