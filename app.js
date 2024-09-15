const EventEmitter = require('node:events');

// create an instance of the class
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');

});

//Raise an event
emitter.emit('messageLogged');
