const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 1;

const criptPassword = function(password) {
    crypto.pbkdf2(password, 'home', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Finished password config!");
    })
}

setTimeout(() => console.log('- Timer 1 finished'), 0);
setImmediate(() => console.log('- Imediate 1 finished'));

fs.readFile('text-file.txt', () => {
    console.log('- IO finished');

    setTimeout(() => console.log('- Timer 2 finished'), 0);
    setTimeout(() => console.log('- Timer 3 finished'), 3000);
    setImmediate(() => console.log('- Imediate 2 finished'));
    setImmediate(() => console.log('- Imediate 3 finished'));
    process.nextTick(() => console.log('- nextTick 2 finished'));
    
    criptPassword('password');
    criptPassword('password');
    criptPassword('password');
    criptPassword('password');
    criptPassword('password');
})
process.nextTick(() => console.log('- nextTick 1 finished'));

console.log('Hello from the top-level code');