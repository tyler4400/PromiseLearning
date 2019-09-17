function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000)
    })
}

async function syncFn(){
    let temp = {};
        temp = await resolveAfter2Seconds(); //将异步方法变为同步
    console.log(temp);
}

syncFn();
