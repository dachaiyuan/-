function sortArray(arr){
    function dp(nums,l,r){
        let source = nums[r];
        let index = l-1;
        for(let i = l;i<r-1;i++){
            if(nums[i] <= source){
                index++;
                [nums[index],nums[i]] = [nums[i],nums[index]];
            }
        }
        [nums[index+1],nums[r]] = [nums[r],nums[index+1]];
        return index + 1;
    }
    function deal(nums,l,r){
        let m = Math.floor(Math.random() * (r+1));
        [nums[m],nums[r]] = [nums[r],nums[m]];
        return dp(nums,l,r)
    }
    function native_sort(nums,l,r){
        if(l<r){
            let middle = deal(nums,l,r);
            native_sort(nums,l,middle-1);
            native_sort(nums,middle+1,r);
        }
    }
    native_sort(arr,0,arr.length-1)
    return arr;
}
var a = [5,2,3,1,3,7,55,4,66,4,43,45,22,55,77,86];
console.log(sortArray(a))