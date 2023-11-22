const fs = require('fs');
const path = require('path');
const pathdir = process.argv[2];
const extention = process.argv[3];
fs.readdir(pathdir, (err, filename) => {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < filename.length; i++) {
      if (extention === path.extname(filename[i]).substring(1)) {
        console.log(filename[i]);
      }
    }
  }
});
