function a() {
    console.log('a')
    b()
}

function b() {
    console.log('b')
    a()
}

a()