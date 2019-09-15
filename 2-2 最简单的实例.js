console.log('>>>>>>>started');
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
        console.log(123);
    }, 2000);
})
    .then(name => {
        console.log(name + 'world');
    });
