const EventEmitter = require('node:events');

// When a function is inside a class, we call it a method
class Logger extends EventEmitter{
    log(message) {
        // Send an HTTP request
        console.log(message);
        //Raise an event and encapsulate values about the event in an object (i.e. event argument);
    this.emit('messageLogged', {id:1, url:'http://something.good'});
    }
}


module.exports = Logger;