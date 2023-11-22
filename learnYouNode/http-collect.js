const http = require('http');

http.get(process.argv[2], (res) => {
  let data = '';
  let len = 0;
  res.on('data', (chunk) => {
    const character = chunk.toString();
    len = len + character.length;
    data = data + character;
  });
  res.on('end', () => {
    console.log(len);
    console.log(data);
  });
  res.on('error', console.error);
});
