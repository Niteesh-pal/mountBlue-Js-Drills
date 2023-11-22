const http = require('http');

http
  .createServer((req, res) => {
    console.log(req.url);
    let data = '';
    req.on('data', (chunk) => {
      data = data + chunk.toString();
    });

    req.on('end', () => {
      res.end(data.toUpperCase());
    });
  })
  .listen(process.argv[2]);
