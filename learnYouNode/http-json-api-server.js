const http = require('http');
const url = require('url');
http
  .createServer((req, res) => {
    let path = url.parse(req.url);
    const hostpath = path.pathname;

    const temp = path.query;

    // console.log(path);
    if (hostpath == '/api/parsetime') {
      const value = temp.split('=');

      const date = new Date(value[1]);
      const result = { hour: 0, minute: 0, second: 0 };

      result.hour = date.getHours();
      result.minute = date.getMinutes();
      result.second = date.getSeconds();
      res.end(JSON.stringify(result));
    } else {
      const value = temp.split('=');

      const date = new Date(value[1]);
      res.end(JSON.stringify({ unixtime: date.getTime() }));
    }
  })
  .listen(process.argv[2]);
