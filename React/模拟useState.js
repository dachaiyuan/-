function createUseState() {
    let a;
    let flag = false;
    return function (value) {
        if (!flag) {
            a = value;
            flag = true;
        }
        return [
            a,
            val => a = val,
        ]
    }
}

let useState = createUseState();