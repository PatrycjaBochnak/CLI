const fs = require("fs");
const path = require("path");
const argv = require("./argv");

// node index.js --dir 'files' --ext 'png' --format 'photo-$$$'

console.log ( argv.get("dir"))