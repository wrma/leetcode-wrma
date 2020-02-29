/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 思路一： 正常的从上至下层次遍历，然后逆序
var levelOrderBottom = function(root) {
    const queue = [];
    const result = [];
    let level = 0;
    if (root === null) return result;
    queue.push(root);
    while (queue.length > 0) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const top = queue.shift(); // 栈顶元素
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }
            if(!result[level]) {
                result[level] = [];
            }
            result[level].push(top.val);
        } 
        level++
    }
    return result.reverse()
};
// @lc code=end

