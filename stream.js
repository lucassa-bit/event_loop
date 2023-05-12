const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const file = fs.ReadStream('test-file.txt');
    file.pipe(res);
});

server.listen(8080, 'localhost');