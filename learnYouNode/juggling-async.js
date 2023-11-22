// const http = require('http');
// let resultQueue = [];
// let count = 0;

// for (let i = 2; i < process.argv.length; i++) {
//   let data = '';
//   http.get(process.argv[i], (res) => {
//     res.setEncoding('utf-8');
//     res.on('data', (chunk) => {
//       data = data + chunk;
//     });
//     res.on('end', () => {
//       resultQueue[i] = data;
//       count++;
//     });
//     res.on('error', console.error);
//   });
// }

// for (let i = 2; i < resultQueue.length; i++) {
//   console.log(resultQueue[i]);
// }

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
  for (var i = 0; i < 3; i++) console.log(results[i]);
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) return console.error(err);

        results[index] = data.toString();
        count++;

        if (count == 3) printResults();
      })
    );
  });
}

for (var i = 0; i < 3; i++) httpGet(i);
