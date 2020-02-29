/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
// 栈的出栈入栈
var simplifyPath = function(path) {
    // 把path中多余的'/'去掉
    const pathArr = path.split('/').filter(item => item !== '' && item !== '.');
    const stack = [];
    for(let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] !== '..') {
            stack.push(pathArr[i]);
        } else {
            stack.pop();
        }
    }
    return `/${stack.join('/')}`;
};
// @lc code=end

