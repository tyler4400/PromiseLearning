console.log('>>>>>>>started');

new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved');
        console.log('timeout');
    }, 2000);
})
    .then(value => {
        console.log('then1:' + value);
        return new Promise(resolve => {
            setTimeout( () => {
                resolve('resolved2');
            }, 2000);
        })
    })
    .then(value => {
        console.log('then2:' + value);
    });

console.log('<<<<<<<ended');
