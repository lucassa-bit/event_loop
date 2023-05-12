const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solução 1 - problem: Node has to load the 
    // entire file in memory and only after finished, it will be send
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) {
    //         console.log(err.message);
    //         throw err;
    //     }

    //     res.end(data);
    // })

    // Solução 2 - Problem: readable stream is much faster than sending
    // the result with the response writable stream over 
    // the network. And this will overwhelm the response stream
    // which cannot handle all this incoming data so fast. This problem is called backpressure.
    // backpressure happens when the response cannot send tha data
    // nearly as fast as it is receiving it from the file

    // const readable = fs.ReadStream('testt-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     console.log('finished');
    //     res.end();
    // })
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('file not found');
    // })

    // Solução 3
    const readable = fs.ReadStream('test-file.txt');
    readable.pipe(res);
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Server on...');
})