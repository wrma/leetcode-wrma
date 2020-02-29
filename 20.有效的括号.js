/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 思路一：双指针法(不行，针对嵌套的括号才有效)
// var isValid = function(s) {
//     const map = ['{', '}', '[', ']', '(', ')'];
//     // i 遍历的括号
//     // j 当前需要匹配的括号
//     let i = 0, j = s.length - 1;
//     const sArr = s.split('');
//     while ( i <= j ) {
//         const mapIndex = map.indexOf(sArr[i]);
//         if (sArr[j] !== map[mapIndex + 1]) {
//             return false
//         } else {
//             i++;
//             j--;
//         }
//     }
//     return true
// };

// 思路二：利用栈，括号匹配则出栈，最后栈空则匹配成功
var isValid = function(s) {
    const leftBracket = ['(', '[', '{'];
    const rightBracket = [')', ']', '}'];
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        // 如果是左括号就入栈
        // 如果是右括号就出栈看是否匹配，不匹配直接返回false
        if (leftBracket.includes(s[i])) {
            stack.push(s[i]);
        } else if (rightBracket.includes(s[i])) {
            const temp = stack.pop();
            if (rightBracket.indexOf(s[i]) !== leftBracket.indexOf(temp)) {
                return false
            }
        }
    }
    if( stack.length === 0) {
        return true
    } else return false
};
// note：特殊用例要考虑到，"","(","(("

// 同样用栈，括号的匹配方式可以使用对象来匹配
var isValid = function(s) {
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        // 如果是左括号就入栈
        // 如果是右括号就出栈看是否匹配，不匹配直接返回false
        if (Object.keys(brackets).includes(s[i])) {
            stack.push(s[i]);
        } else {
            const temp = stack.pop();
            if (brackets[temp] !== s[i]) {
                return false
            }
        }
    }
    if( stack.length === 0) {
        return true
    } else return false
};
// @lc code=end

