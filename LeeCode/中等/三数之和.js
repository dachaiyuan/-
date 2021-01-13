// https://leetcode-cn.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = {};
    for(i=0;i<nums.length-2;i++){
        for(j=i+1;j<nums.length-1;j++){
            for(k=j+1;k<nums.length;k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    let helps = [nums[i],nums[j],nums[k]].sort().join(',')
                    res[helps] = [nums[i],nums[j],nums[k]];
                }
            }
        }
    }
    return Object.values(res);
};

var threeSum = function(nums) {
    nums = nums.sort()
    console.log(nums)
    let hash = {};
    let res = {};
    for(i=0;i<nums.length-2;i++){
        for(j=i+1;j<nums.length-1;j++){
            hash[-nums[i] - nums[j]] = [nums[i],nums[j]];
            if(hash[nums[j+1]] !== undefined){
                let arr = [...hash[nums[j+1]], nums[j+1]];
                res[arr.sort().join()] = arr;
                hash[nums[j+1]] = undefined;
            }
        }
    }
    return Object.values(res);
};

let nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(nums))
