function sleep(time){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('请求已到达：'+time),time)
    })
}

let q = [];

function searchChange(t){
    q.push(sleep(t))
    deal();
}

searchChange(2000)
searchChange(1000)

var pending = false
function deal(){
    if(pending || q.length<=0){
        return
    }
    let current = q.shift();
    pending = true;
    current.then(res => {
        console.log('当前渲染：',res)
        pending = false
        if(q.length){
            deal();
        }
    })
}
