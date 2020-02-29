/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 最简单的思路就是遍历找 O(n^2)
// 思路二：双指针法，利用数组是升序排列的，两数之和可以简化为一个大数加一个小数
var twoSum = function(numbers, target) {
    // i: 小数的下标值
    // j: 大数的下标值
    // 当 nums[i] + num[j] === target 时，指针停止走动
    let i = 0, j = numbers.length - 1;
    while (numbers[i] + numbers[j] !== target) {
        if (numbers[i] + numbers[j] < target) {
            i++;
        }
        if (numbers[i] + numbers[j] > target) {
            j--;
        }
    }
    return [i+1,j+1]
};
// @lc code=end

