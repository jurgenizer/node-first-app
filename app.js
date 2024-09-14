const path = require('node:path');


const log = require('./logger');

//console.log(__filename);


var pathObj = path.parse(__filename);
console.log(pathObj);