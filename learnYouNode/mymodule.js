const fs = require('fs');
const path = require('path');

function mymodule(dir, extention, callback) {
  fs.readdir(dir, (err, filename) => {
    if (err) {
      return callback(err);
    } else {
      let list = filename.filter((ele) => {
        if (extention === path.extname(ele).substring(1)) {
          return ele;
        }
      });
      callback(null, list);
    }
  });
}

module.exports = mymodule;
