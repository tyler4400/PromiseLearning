console.log('>>>>>>>started');

new Promise((resolve, rejected) => {
    /**
     * 如果不是放在定时器里面，后面的catch可以捕获到；

     2.如果放在定时器里面（又或者跟之前的课程一样放在一个立即执行函数里面），后面的catch就捕获不到了，不过全局window.onerror可以捕获到。

     综上，本质是函数是否进入同一个执行栈，从而影响后续的捕获。
     */
    // setTimeout(() => {
        throw new Error('code error')
        // rejected('rejected')
    // }, 2000)
}).then(value => {
    console.log('then:' + value);
}).catch(value => {
    console.log('catch:' + value);
}).finally(value => {
    console.log('finally:' + value);
});

console.log('<<<<<<<ended');
