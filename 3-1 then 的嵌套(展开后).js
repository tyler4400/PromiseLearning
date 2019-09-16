console.log('>>>>>>>started');

new Promise(resolve => {
    console.log('Step 1');
    setTimeout(() => {
        resolve('第一个promise');
    }, 1000);
})
    .then(value => {
        return new Promise(resolve => {
            console.log('Step 1-1');
            setTimeout(() => {
                resolve('第二个promise');
            }, 1000);
        })
    })
    .then(value => {
        console.log('Step 1-2');
        return value;
    })
    .then(value => {
        console.log('Step 1-3');
        return value;
    })
    .then(value => {
        console.log(value); // 第二个promise
        console.log('Step 2');
    });

console.log('<<<<<<<ended');
