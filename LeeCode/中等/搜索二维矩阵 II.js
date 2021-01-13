//https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

// var searchMatrix = function(matrix, target) {
//     if(!matrix[0]) return false;
//     let m = matrix.length;
//     let n = matrix[0].length;
//     let resFlag = false;
//     for(let i = 0; i<m; i++){
//         for(let j=0; j<n ; j++){
//             if(matrix[i][j] == target){
//                resFlag = true;
//                break;
//             }
//         }
//     }
//     return resFlag;
// };

var searchMatrix = function(matrix, target) {
    if(!matrix[0]) return false;
    let m = matrix.length;
    let n = matrix[0].length;
    let maxLength = m>n?m:n;
    console.log(m,n)
    for(let i = 0; i<maxLength; i++){
        let x = m-1-i>0?i:m-1;
        let y = n-1-i>0?i:n-1;
        console.log(x,y)
        if(matrix[x][y]== target){
            return true;
        }else if(matrix[x][y] > target && i>0){
            for(let xSide = x; xSide>=0; xSide--){
                if(matrix[xSide][y] == target){
                    return true;
                }else if(matrix[xSide][y] < target){
                    break;
                }
            }
            for(let ySide = y; ySide>=0; ySide--){
                if(matrix[x][ySide] == target){
                    return true;
                }else if(matrix[x][ySide] < target){
                    break;
                }
            }
        }
    }

    return false;
};

var a = [
    [1,2,3,4,5],
    // [6,7,8,9,10],
    // [11,12,13,14,15],
    // [16,17,18,19,20],
    // [21,22,23,24,25]
];

console.log(searchMatrix(a,5))