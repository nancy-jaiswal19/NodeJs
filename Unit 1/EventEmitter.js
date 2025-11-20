const EventEmitter = require("events");
const statusMonitor = new EventEmitter();

// Registering the Listener 
statusMonitor.on('alert', (severity, message) => {
    console.log(`[ALERT - ${severity.toUpperCase()}]: ${message}`);
});

statusMonitor.once('startup',()=>{
    console.log('Application initialization complete.')
})

// Emitting the events

statusMonitor.emit('startup')  // This listner run once
statusMonitor.emit('startup')  //This is ignored because it was registered with .once 


statusMonitor.emit('alert', 'high', 'Database connection lost!');
statusMonitor.emit('alert', 'low', 'Low disk space warning') 