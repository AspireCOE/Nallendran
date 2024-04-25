const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listen for the 'event' event
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Emit the 'event' event
myEmitter.emit('event');
