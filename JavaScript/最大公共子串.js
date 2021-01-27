function longestCommonPrefix( strs ) {
    if(!strs.length) return '';
    let res = '';
    function help(arr,l){
        let current = '';
        for(let i=0; i< arr.length; i++){
            if(arr[i].length < (l+1)) return;
            current = current || arr[i][l];
            if(current != arr[i][l]) return;
        }
        res += current;
        help(arr,l+1)
    }
    help(strs,0);
    return res;
}
console.log(longestCommonPrefix(["abca","abc","abca","abc","abcc"]))