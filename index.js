const fs = require("fs");
const path = require("path");
const argv = require("./argv");

// Sprawdzenie poprawności podanych elementów
if (!argv.validate(["dir", "ext", "format"])) {
  throw new Error("No valid parameters given");
}

//Odczytanie plików z katalogu
let dir = path.join(__dirname, argv.get("dir"));

fs.readdir(dir, function (err, files) {
  if (err) {
    throw err;
  } else {
  }
});
