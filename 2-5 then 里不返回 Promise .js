console.log('>>>>>>>started');

new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000);
})
    .then(value => {
        console.log(value);
        console.log('everyone');
        (function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Mr.Laurence');
                    resolve('Merry Xmas');
                }, 2000);
            });
        }());
        return false; // 没有等待上面的立即执行函数返回，直接返回false，执行下面的then
    })
    .then(value => {
        console.log(value + ' world'); // 这里并非是Merry Xmas world.而resolve()里的数据为什么没被调用呢？因为上一个then()方法里return的是false而不是Promise实例。
    });

console.log('<<<<<<<ended');
