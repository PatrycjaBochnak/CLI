const fs = require('fs');
const path = require('path');

function sortByDate(files, dir) {
    files.sort(function(a, b) {
        var aStat = fs.statSync(path.join(dir, a));
        var bStat = fs.statSync(path.join(dir, b));

        return aStat.birthtime.getTime() - bStat.birthtime.getTime();
    });
    return files; 
}

module.exports = {
    sortByDate: sortByDate
};