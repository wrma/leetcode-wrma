/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 思路一：双指针法
var isPalindrome = function(s) {
    // 对s进行预处理，去除s中的非数字和字母字符，并转化为小写
    const str = s.replace(/\W/g, '').toLocaleLowerCase();
    // i 头部开始的字符串
    // j 尾部开始的字符串
    // 当 i <= 数组一半长度时，验证成功返回 true,否则返回false
    let i = 0, j = str.length - 1;
    if (str === '') return true;
    while (i < parseInt(str.length/2)) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }
    return true
};
// note: 在思考问题是要注意考虑是否有边界条件
// eg: 空字符串/空数组, 负数
// @lc code=end

