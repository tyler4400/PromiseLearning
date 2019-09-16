console.log('>>>>>>>started');

new Promise(resolve => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
    .then(value => {
        console.log(value);
        throw new Error('an error')
    })
    .catch(error => {
        console.log('catch: ' + error);
        return 2
    })
    .then(value => {
        console.log(value);
        return 3
    })
    .finally( () => {
        console.log('finally');
    })
    .then(value => {
        console.log(value);
        throw new Error('another error')
    })
    .catch(error => {
        console.log(error);
    })
    .finally( () => {
        console.log('finally finally');
    })
console.log('<<<<<<<ended');
