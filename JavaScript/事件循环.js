
console.log(4)
new Promise((resolve) => {
    console.log(5)
    setTimeout(() => {
        console.log(6)
    })
    resolve()
    console.log(7)
}).then(() => {
    console.log(8)
})

setTimeout(() => {
    console.log(1)
    new Promise(resolve => {
        resolve()
        console.log(2)
    }).then(() => {
        console.log(3)
    })
})
console.log(9)