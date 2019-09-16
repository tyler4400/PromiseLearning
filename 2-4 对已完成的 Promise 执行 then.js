console.log('>>>>>>>started');

let promise2MarryYou = new Promise(resolve => {
    setTimeout(() =>{
        resolve('Yes');
        console.log('will you marry me ?');
    }, 2000);
});

setTimeout(() => {
    promise2MarryYou.then(value => {
        console.log(value);
    })
}, 4000);

console.log('<<<<<<<ended');
