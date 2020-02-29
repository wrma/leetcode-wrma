/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
// 层次遍历，保留每一层最右边的值
var rightSideView = function(root) {
    const queue = [];
    const result = [];
    if (root === null) return result;
    queue.push(root);
    while ( queue.length > 0 ) {
        for (let i = 0, length = queue.length; i < length; i++) {
            const top = queue.shift();
            if (top.left) {
                queue.push(top.left);
            }
            if (top.right) {
                queue.push(top.right);
            }
            if (i === length - 1) {
                result.push(top.val);
            }
        }
    }
    return result
};
// @lc code=end

