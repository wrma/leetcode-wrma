/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 思路一： 对数组进行排序(由大到小)，找到第K个元素
var findKthLargest = function(nums, k) {
    const newArr = nums.sort((a,b) => b-a);
    return newArr[k-1];
};
// @lc code=end

