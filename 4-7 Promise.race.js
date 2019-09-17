// 类似Promise.all()，区别在于它有任意一个完成就算完成
console.log('>>>>>>>started');

let p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('i am p1')
    }, 1000)
});
let p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('i am p2')
    }, 3000)
});

Promise.race([p1, p2])
// Promise.all([p1, p2])
    .then(value => {
        console.log('Promise.race:' + value);
    });

console.log('<<<<<<<ended');
