/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 思路一： 合并后直接排序
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length, ...nums2)
    // sort返回值接受一个数值而非boolean
    nums1.sort((x,y) => {
        return x - y
    });
};

// 思路二：双指针法
// note: 有序数组的问题都可以考虑双指针法哦
var merge = function(nums1, m, nums2, n) {
    
};

// merge([1,2,3,0,0,0],3,[2,5,6],3);
// @lc code=end

