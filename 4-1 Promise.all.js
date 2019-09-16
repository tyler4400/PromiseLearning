console.log('>>>>>>>started');

Promise.all(['a', 'b', 'c']) // 它接受一个数组作为参数，数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态的改变。
    .then(all => {
        console.log('1：', all);
        return Promise.all([
            function (){
                console.log('ooxx');
            },
            'xxoo',
            false
        ]);
    })
    .then(all => {
        console.log('2：', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            }, 1500);
        });
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('I\'m P2');
                reject('I\'m P2');
            }, 1000);
        });
        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I\'m P3');
            }, 3000);
        });
        return Promise.all([p1, p2, p3]);
    })
    .then(all => {
        console.log('all', all);
    })
    .catch(err => {
        console.log('Catch：', err);
    });

console.log('<<<<<<<ended');
