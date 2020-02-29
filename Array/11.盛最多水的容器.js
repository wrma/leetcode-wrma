/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针法：
var maxArea = function(height) {
    // i 容器左边宽指针, j 容器右边宽指针
    // 当 j < i + 1 时停止
    let i = 0, j = height.length - 1;
    let maxArea = 0;
    while (i + 1 <= j) {
        let area = 0;
        // 左边宽低的话以左边为宽计算面积
        if (height[i] < height[j]) {
            area = height[i] * (j-i);
            i++;
        } else {
            area = height[j] * (j-i);
            j--;
        }
        if (area > maxArea) {
            maxArea = area;
        }
    }
    return maxArea;
};
// @lc code=end

