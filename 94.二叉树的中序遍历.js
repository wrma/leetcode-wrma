/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 迭代算法，利用栈
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    if (root === null) return result;
    stack.push(root);
    let findLeftNodes = (stack) => {
        while(stack[length - 1].left) {
            stack.push(stack[length - 1].left)
        }
    }
    findLeftNodes(stack);
    while(stack.length) {
        const temp = stack.pop();
        result.push(temp.val);
        if (temp.right) {
            findLeftNodes(stack);
            stack.push(temp.right)
        }
    }
};
// @lc code=end

