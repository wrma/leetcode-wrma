/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1;
    let i = 1, j = 1;
    while (i < nums.length) {
        // i: 快指针，当前索引的位置
        // j: 慢指针，将被覆盖的元素位置
        // count: 当前索引之前相同值的数量
        while (i < nums.length) {
            if (nums[i] === nums[i-1]) {
                count++;
            } else {
                count = 1;
            }

            if (count <= 2) {
                nums[j] = nums[i]
                j++;
            }
            i++;
        }

        
    }
    return j
};
// note: 
// 1.明确每个参数的关系，定义和他们的边界条件


// 想不清楚
// var removeDuplicates = function(nums) {
//     let count = 1;
//     let i = 1, j = 1;
//     // i: 快指针，当前索引的位置
//     // j: 慢指针，将被覆盖的元素位置
//     // count: 当前索引之前相同值的数量
//     while (i < nums.length) {
//         if (count < 2) {
//             if (nums[i] === nums[i-1]) {
//                 count++;
//                 i++;
//                 j++;
//             } else {
//                 nums[j] = nums[i];
//                 i++;
//                 j++;
//                 count = 1;
//             }
//         } else {
//             if (nums[i] === nums[i-1]) {
//                 count++;
//                 i++;
//             } else {
//                 nums[j] = nums[i];
//                 i++;
//                 j++;
//                 count = 1;
//             }
//         }
//     }
//     return j
// };

// 其他解法
var removeDuplicates = function(nums) {
    let max = 2;
    let j = 1;
    // i: 快指针，当前索引的位置
    // j: 慢指针，当前正确队列的最后一项
    // max: 最大相同的值
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j-max+1]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j+1
};
// @lc code=end

