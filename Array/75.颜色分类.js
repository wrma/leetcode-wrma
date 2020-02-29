/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：各种排序算法
// 冒泡排序
var sortColors = function(nums) {
    for(let i = 0; i < nums.length; i++ ) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j-1] > nums[j]) {
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
            }
        }
    }
};

// 三路快排partition
var sortColors = function(nums) {
    // p0: 元素0的边界
    // p2: 元素2的边界
    // i: 当前元素
    let p0 = 0, p2 = nums.length - 1;
    for(let i = 0; i <= p2; ) {
        if (nums[i] === 0) {
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            p0++;
            i++;
        }else if (nums[i] === 2) {
            [nums[i], nums[p2]] = [nums[p2], nums[i]];
            p2--;
            // 从后面交换过来的元素由于没有被cur走过，所以要再进行一次判断，所以这里不能i++;
        }else if (nums[i] === 1) {
            i++;
        }
    }
};
// @lc code=end

