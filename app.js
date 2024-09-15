const EventEmitter = require('node:events');

// create an instance of the class
const emitter = new EventEmitter();

//Register a listener
/* emitter.on('messageLogged', function(){
    console.log('Listener called');
});
 */

//Register a listener with event argument
/* emitter.on('messageLogged', function(arg){ // sometimes arg is replaced by e, eventArg etc
    console.log('Listener called ', arg);
});
*/

//Register a listener with event argument. An now with an ES6 arrow function
emitter.on('messageLogged', (arg) => { // sometimes arg is replaced by e, eventArg etc
    console.log('Listener called ', arg);
});

emitter.on('logging', (arg) => { // sometimes arg is replaced by e, eventArg etc
    console.log('Listener called ', arg);
});

//Raise an event
//emitter.emit('messageLogged');

//Raise an event and encapsulate values about the event in an object (i.e. event argument);
emitter.emit('messageLogged', {id:1, url:'http://something.good'});

//Raise: logging (data: message)
emitter.emit('logging', {data:'The clouds are puffy in Arkansas'});