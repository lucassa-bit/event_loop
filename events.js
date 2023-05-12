// built-in node module
const EventEmmiter = require('events');

class Sales extends EventEmmiter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('New Sale!!!!');
})

myEmitter.on('newSale', () => {
    console.log('New Sale!!!!!');
})

myEmitter.on('notSold', (value) => {
    console.log('Not Sold ' + value);
})

myEmitter.emit('notSold', ":<");
myEmitter.emit('newSale');

/////////////////////////////////////////

const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received');
});
server.on('request', (req, res) => {
    console.log('Request received 2');
    res.end('Request received');
});
server.on('close', () => {
    console.log('Server closed');
});

server.listen(8080, '127.0.0.1', () => {
    console.log('waiting server...');
})

