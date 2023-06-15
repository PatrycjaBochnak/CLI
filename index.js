const fs = require("fs");
const path = require("path");
const argv = require("./argv");
const sortByDate = require("./utils").sortByDate;

// Sprawdzenie poprawności podanych elementów
if (!argv.validate(["dir", "ext", "format"])) {
  throw new Error("No valid parameters given");
}

//Odczytanie plików z katalogu
var dir = path.join(__dirname, argv.get("dir"));

fs.readdir(dir, function (err, files) {
  if (err) {
    throw err;
  }

  //Filtrowanie plików z podanym rozszerzeniem
  var validFiles = files.filter(function (file) {
    return path.extname(file).slice(1) === argv.get("ext");
  });

  console.log(validFiles);
  
  //Przesortuj tablicę według daty
  sortByDate(validFiles, dir);

  console.log(validFiles);
});
