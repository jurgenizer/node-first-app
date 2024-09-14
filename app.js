const fs = require('node:fs');

//const fs = require('node:fs/promises');

const files =  fs.readdir('./', function(err, files) {
//check if we have an error or a result
//only on of these argument s will have a value and the other will be null
if (err) console.log('Error', err);
else console.log('Result', files);

});

