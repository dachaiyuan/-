function sleep(time = 1000){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        },time)
    })
}

function promiseAll(promises){
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promises)) reject()
        let result = [];
        let currentLength = 0;
        for(let i = 0; i<promises.length; i++ ){
            Promise.resolve(promises[i]).then((res) => {
                currentLength ++ ;
                result[i] = res;
                if(currentLength == promises.length){
                    resolve(result)
                }
            })
        }
    })
}
// promiseAll([1,sleep(2000),sleep(3000)]).then( res => {
//     console.log(res)
// })

Promise.all(1,2).then(res => {
    console.log(res)
})