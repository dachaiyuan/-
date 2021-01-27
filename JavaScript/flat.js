Array.prototype._flat = function(n){
    if(n<=0){
        return this;
    }
    let res = [];
    for(let i = 0; i < this.length; i++ ){
        if(Array.isArray(this[i])){
            res.push(...this[i]._flat(n-1))
        }else{
            res.push(this[i]);
        }
    }
    return res;
}


let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

console.log(givenArr._flat(1));
 
 
let outputArr = [1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]