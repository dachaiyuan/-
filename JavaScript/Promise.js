// let p1 = Promise.resolve('1')
// let p2 = Promise.resolve('2')

// Promise.all([p1, p2]).then(console.log)

// let p1 = Promise.resolve('1')
// let p2 = Promise.reject('2')

// Promise.all([p1, p2]).then(console.log, console.log)



let p1 = new Promise((resolve, reject) => {
    resolve('p1成功');
    // setTimeout(() => {
    //     resolve('p1成功');
    // }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2成功');
    }, 2000)
})

// p1.then(r => {
//     console.log('p1执行了')
// // })
// p2.then(r => {
//     console.log('p2执行了')
//     p2.then(r => {
//         console.log('p2执行了')
//     })
// })

// Promise.all([p1, p2]).then(arr => {
//     console.log(arr)
// })


function ajax(config) {
    setTimeout(() => {
        config.success('成功')
    }, 1000)
}

// ajax({
//     url: 'xxx',
//     method: 'get',
//     data: '',
//     success: res => {
//         console.log(res)
//     }
// })

function ajaxPromise(params) {
    return new Promise((resolve, reject) => {
        ajax({
            ...params,
            success: (res) => {
                resolve(res)
            }
        })
    })
}
ajaxPromise({
    url: 'xxx',
    method: 'get',
    data: '',
}).then(res => {
    console.log(res)
})



function submit(){
    let p1 = new Promise((resolve,reject) => {
        if(true){
            resolve()
        }else{
            reject()
        }
    })
    let p2 = new Promise((resolve,reject) => {
        if(true){
            resolve()
        }else{
            reject()
        }
    })

    Promise.all([p1,p2]).then(res => {
        console.log('提交')
    })
}


function save(){
    let p1 = new Promise((resolve,reject) => {
        this.$refs.formSpec.validate(valid => valid?resolve():reject());
    })
    let p2 = new Promise((resolve,reject) => {
        this.$refs.form.validate(valid => valid?resolve():reject());
    })

    Promise.all([p1, p2])
    .then(function(data){
        console.log(data);
    })
    .catch(function(data){

    });
}

function save(){
    var formSpecPromise = this.$refs.formSpec.validate(valid => {
        if (valid) {

        }else{
            
        }
    });
    var formPromise = this.$refs.form.validate(valid => {
        if (valid) {
            
        }else{
            
        }
    });

    Promise.all([formSpecPromise, formPromise])
    .then(function(data){
        console.log(data);
    })
    .catch(function(data){

    });
}

var promise1 = new Promise((resolve,reject) => {
    console.log(1);
    setTimeout(() => {
        console.log(2)
        resolve();
        console.log(4)
    })
})
promise1.then(() => {
    console.log(3)
})
console.log(promise1)