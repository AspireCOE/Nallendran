const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listen for the 'order' event
myEmitter.on('order', (parameter1,parameter2) => {
  console.log(`An event occurred! ${parameter1} ${parameter2} `);
});

// Emit the 'order' event
myEmitter.emit('order','arg1','arg2');     //emit accept eventname as parameter here order is eventname
