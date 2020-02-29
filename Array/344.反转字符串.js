/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 思路一：js api reverse 方法
var reverseString = function(s) {
    s.reverse()
};


// 思路二：双指针法
var reverseString = function(s) {
    // i 头部指针
    // j 尾部指针
    // 当 i <= parseInt(s.length/2) 时完成交换
    let i = 0, j = s.length - 1;
    while(i < parseInt(s.length/2)) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
};
// @lc code=end
