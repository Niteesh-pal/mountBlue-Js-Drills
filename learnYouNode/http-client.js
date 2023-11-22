const { error } = require('console');
const https = require('http');
const arg = process.argv[2];

https.get(arg, (res) => {
  res.setEncoding('utf-8');

  res.on('data', (chunk) => console.log(chunk));
  res.on('error', console.error);
});
on('error', console.error);
