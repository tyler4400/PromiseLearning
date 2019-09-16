console.log('>>>>>>>started');

function getNumber(){
    return new Promise(function (resolve, reject){
        //做一些异步操作
        setTimeout(function (){
            const num = Math.ceil(Math.random() * 10); //生成1-10的随机数
            if (num <= 5) {
                resolve(num);
            } else {
                reject('数字太大了');
            }
        }, 2000);
    });
}

getNumber()
// .then(function (data){
    //         console.log('resolved').
//     });
    .then(data => {
        console.log('resolved: ' + data);
    })
    .catch(data => {
        console.log('rejected: ' + data);
        return data;
    })
    .finally(data => {
        console.log('finally: ' + data);
    });

console.log('<<<<<<<ended');
