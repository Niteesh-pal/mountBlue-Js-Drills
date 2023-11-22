const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf-8');
const result = data.split('\n');
console.log(result.length - 1);
