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

function getTargetArray(root){
    let res = [];
    function DFS(root, level){
        res[level] = res[level] || [];
        res[level].push(root.val)

        root.left && DFS(root.left, level + 1);
        root.right && DFS(root.right,level + 1);
    }
    DFS(root,0)
    return res;
}

console.log(getTargetArray(tree))