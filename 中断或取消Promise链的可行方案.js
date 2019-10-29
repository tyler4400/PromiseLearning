/**
 * Promise的then方法接收两个参数：
 Promise.prototype.then(onFulfilled, onRejected)
 若onFulfilled或onRejected是一个函数，当函数返回一个新Promise对象时，原Promise对象的状态将跟新对象保持一致，详见Promises/A+标准。
 因此，当新对象保持“pending”状态时，原Promise链将会中止执行。
 ————————————————
 版权声明：本文为CSDN博主「ambit_tsai-微信」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
 原文链接：https://blog.csdn.net/ambit_tsai/article/details/80635594
 */


console.log('>>>>>>>started');

Promise.resolve()
    .then(() => {
        console.log('onFulfilled_1');
        return new Promise(()=>{
            // throw new Error('it is a err');
            console.log('im pending');
        }); // 返回“pending”状态的Promise对象
    })
    .then(() => {   // 后续的函数不会被调用
        console.log('onFulfilled_2');
    })
    .catch(err => {
        console.log('catch', err);
    })
    // .then(() => {
    //     return new Promise(()=>{
    //     //     throw new Error('it is another err');
    //         console.log('im pending again');
    //     }); // 返回“pending”状态的Promise对象
    // })
    // .then(() => {   // 后续的函数不会被调用
    //     console.log('onFulfilled_3');
    // })
;

console.log('<<<<<<<ended');
