var splitIntoFibonacci = function (S) {
    if (S[0] == 0) return [];
    for (let i = 1; i < S.length; i++) {
        console.log(S.slice(0, i), 'i==', i)
        for (let j = i + 1; j < S.length; j++) {
            console.log(S.slice(i, j), 'j==', j)
        }
    }
    let num1 = S.slice(0, 1);
    console.log(' ')

};


splitIntoFibonacci('123456579')