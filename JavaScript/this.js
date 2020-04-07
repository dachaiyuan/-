function y() {
    console.log('y:this', this)

    function b() {
        console.log('b:this', this)
    }
    b();
}

new y();

