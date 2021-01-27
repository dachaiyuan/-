function tryPromise(fn,time,duration){
    let currentTime = time;
    function tack(){
        return new Promise((resolve,reject) => {
            fn(arguments).then((res) => {
                resolve(res)
            },(err) => {
                if(currentTime > 0){
                    console.log('错误：尝试再次请求')
                    setTimeout(() => {
                        currentTime--;
                        tack(...arguments);
                    },duration)
                }
            })
        })
    }
    return tack;
}

let r = tryPromise(() => Promise.reject(),2,1000);
r();