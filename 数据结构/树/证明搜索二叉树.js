function Node(val){
    this.left = null;
    this.right =  null;
    this.value = val
}

/**
 *       6
 *   3       8
 * 1  4    7   9
 */

function Tree(arr){
    let res = new Node(arr[0]);
    res.left = arr[1] ? Tree(arr[1]): null;
    res.right = arr[2] ? Tree(arr[2]) : null;
    return res;
}

let arr = [
    6,
    [3,[1],[4]],
    [8,[7],[9]]
];

let tree = Tree(arr);

function checkSearchTree(tree){
    let max = null;
    let flag = true;
    function preOrderTree(tree){
        if(!tree || !flag) return;
        if(tree.left){
            preOrderTree(tree.left)
        }
        if(max){
            if(max < tree.value){
                max = tree.value
            }else{
                flag = false;
                return;
            }
        }else{
            max = tree.value
        }

        if(tree.right){
            preOrderTree(tree.right)
        }
    }
    preOrderTree(tree)
    return flag;
}

console.log(checkSearchTree(tree))