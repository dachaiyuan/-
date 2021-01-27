function Node(val){
    this.left = null;
    this.right =  null;
    this.val = val
}

/**
 *       3
 *   5       1
 * 6  2    0   8
 *   7 4        
 */

function Tree(arr){
    let res = new Node(arr[0]);
    res.left = arr[1] ? Tree(arr[1]): null;
    res.right = arr[2] ? Tree(arr[2]) : null;
    return res;
}

let arr = [
    3,
    [5,[6,null,null],[2,[7],[4]]],
    [1,[0,null,null],[8,null,null]]
];

let tree = Tree(arr);


function lowestCommonAncestor(tree, one,two){
    if(tree == null) return;
    if(tree.val == one || tree.val == two){
        return tree
    }

    let leftTree = null;
    let rightTree = null;
    if(tree.left){
        leftTree = lowestCommonAncestor(tree.left,one,two)
    }
    if(tree.right){
        rightTree = lowestCommonAncestor(tree.right,one,two)
    }
    if(leftTree !== null && rightTree !== null){
        return tree
    }else{
        return leftTree == null ? rightTree: leftTree
    }
}
console.log(lowestCommonAncestor(tree,5,4))