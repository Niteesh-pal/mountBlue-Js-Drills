const fs = require('fs');
const argument = process.argv[2];

fs.readFile(argument, 'utf-8', (err, data) => {
  const content = data.split('\n');
  console.log(content.length - 1);
});
