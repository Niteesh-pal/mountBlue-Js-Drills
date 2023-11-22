const net = require('net');

const server = net.createServer((con) => {
  const date = new Date();
  const res = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

  console.log(res);
  con.end(res + '\n');
});

server.listen(process.argv[2], () => {
  console.log('server is listing at prot no 8080');
});
