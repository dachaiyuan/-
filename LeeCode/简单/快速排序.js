function quickSort(arr){
    if(arr.length <=1){
        return arr;
    }
    let end = arr[0];
    arr = arr.slice(1)
    let left = [];
    let right = [];
    
    arr.map((val,index) => {
        if(val > end){
           right.push(val)
        }else{
            left.push(val)
        }
    })

    let left1 = quickSort(left)
    let right1 = quickSort(right)

    return [...left1,end,...right1]

}

let arr = [1,3,2,4,6,6,7,8,4,5,9]
console.log(quickSort(arr));