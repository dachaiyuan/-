function Node(val){
    this.left = null;
    this.right =  null;
    this.val = val
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
// console.log(tree)

function preOrderTree(tree){
    if(!tree) return;
    console.log(tree.val);
    if(tree.left){
        preOrderTree(tree.left)
    }
    if(tree.right){
        preOrderTree(tree.right)
    }
}
preOrderTree(tree);