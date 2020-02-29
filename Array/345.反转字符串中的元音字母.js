/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 双指针法
var reverseVowels = function(s) {
    const smap = ['a', 'e', 'i', 'o', 'u'];
    // i 前面的元音字母，j 后面的元音字母
    // 当 i === j时停止反转
    if (s === '') return s;
    let i = 0, j = s.length - 1;
    const sArr = s.split('');
    while (i < j) {
        if (!smap.includes(sArr[i].toLocaleLowerCase())) {
            i++;
        } else if (!smap.includes(sArr[j].toLocaleLowerCase())) {
            j--;
        } else {
            [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
            i++;
            j--;
        }   
    }
    return sArr.join('');
};
// reverseVowels('hello')
// notes: 边界条件：空字符串，大小写
// @lc code=end

