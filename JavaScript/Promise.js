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
