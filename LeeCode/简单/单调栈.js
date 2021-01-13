function singleStack(arr){
    let leftMin = [];
    let rightMin = [];
    let output = new Array(arr.length).fill([-1,-1]);
    for(let i = 0; i< arr.length; i++){
        if(i != 0){
            if(leftMin[i] !== undefined){
                output[i][0] = leftMin[i];
            }else{
                for(let l=0; l<i-1; l ++){

                }
            }
        }
    }
}

arr = [3,4,1,5,6,2,7]
[
    [-1,2],
    [0,2],
    [-1,-1],
    [2,5],
    [3,5],
    [2,-1],
    [5,-1]
]
