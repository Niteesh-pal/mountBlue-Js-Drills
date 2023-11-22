const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let data = fs.createReadStream(process.argv[3]);
    data.pipe(res);
  })
  .listen(process.argv[2]);
