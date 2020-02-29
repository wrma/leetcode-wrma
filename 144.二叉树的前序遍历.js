/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 方式一： 递归
var preorderTraversal = function(root) {
    
}

// 方式二：利用栈
var preorderTraversal = function(root) {
    const stack = [];
    const result = [];
    if (root === null) return result;
    stack.push(root);
    while (stack.length) {
        const temp = stack.pop();
        result.push(temp.val)
        if (temp.right) {
            stack.push(temp.right)
        }
        if (temp.left) {
            stack.push(temp.left)
        }
    }
    return result
}
// @lc code=end

