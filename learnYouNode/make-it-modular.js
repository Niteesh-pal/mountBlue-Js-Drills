const mymodule = require('./mymodule.js');
const location = process.argv[2];
const extention = process.argv[3];

var callback = function (err, list) {
  if (err) {
    console(err);
  } else {
    list.forEach((element) => {
      console.log(element);
    });
  }
};

mymodule(location, extention, callback);
