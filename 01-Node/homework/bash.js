const commands = require("./commands");

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  var input = data.toString().trim().split(" ");
  var cmd = input.shift(); // remueve la nueva línea
  var info = input.join(" ");

  if (commands.hasOwnProperty(cmd)) {
    commands[cmd](info);
  } else {
    process.stdout.write(`${cmd} is not a command`);
    process.stdout.write("\nprompt > ");
  }
});
