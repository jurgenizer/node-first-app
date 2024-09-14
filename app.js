const os = require('node:os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total memory: ' + totalMemory);

// Temmplate string from ES6
console.log(`Total memory: ${totalMemory}`);

console.log(`Free memory: ${freeMemory}`);



