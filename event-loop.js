const fs = require('fs');
const crypto = require('crypto');
const now = Date.now();

process.env.UV_THREADPOOL_SIZE = 1;

const encript = password => {
    crypto.pbkdf2(password, 'home', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - now, "Encripted");
    })
};

setTimeout(() => {
    console.log('- Time out - 1');
}, 0);
setTimeout(() => {
    console.log('- Time out - 2');
}, 0);

setImmediate(()=> {
    console.log('- set imediate - 1');
})

console.log('ok');

fs.readFile('test-file.txt', (data) => {
    console.log('i/o finished');

    setTimeout(() => {
        console.log('- Time out - 2');
    }, 0);
    

    setImmediate(()=> {
        console.log('- set imediate - 2');
    });

    process.nextTick(() => {
        console.log('nextTick - 2')
    });

    encript('password');
    encript('password');
    encript('password');
    encript('password');
});

console.log('Alto nível');

process.nextTick(() => {
    console.log('nextTick - 1')
});
