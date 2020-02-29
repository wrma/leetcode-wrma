/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 思路一：找到数组中的所有满足条件的值并删除
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

// 思路二：双指针法，将非val值得所有值移动到最后面，统一删除
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
    return i
};

// perf: 双指针优化
// 由于题目没有规定要保留的元素的顺序
// 当要删除的元素很少的时候，我们可以从头尾来交换元素
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = nums.length - 1; j > i - 1; j--) {
        if (nums[i] === val) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            j++;
            i++;
        }
    }
    return i
};

// @lc code=end

