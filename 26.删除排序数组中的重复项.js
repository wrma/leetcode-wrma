/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路一： 利用es6 set (需要原地去重，不行)
// 思路二： 双指针法(交换+覆写)
// 思路三： 用一个额外的数组空间存放非重复的值（空间复杂度高）
var removeDuplicates = function(nums) {
    let i = 0, j = i + 1;
    while( j < nums.length ) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return i+1
};

var removeDuplicates = function(nums) {
    // slow: 当前正确队列的最后一项
    // fast: 当前索引
    let slow = 0;
    for(let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        }
    }
    return slow+1
};
// @lc code=end

