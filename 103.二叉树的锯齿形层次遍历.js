/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
// 普通层次遍历，在遍历时判断level是奇数层还是偶数层
var zigzagLevelOrder = function(root) {
    const queue = [];
    let queue2 = [];
    const result = [];
    let level = 0;
    if (root === null) return result;
    queue.push(root);
    while( queue.length > 0 ) {
        const length = queue.length;
        queue2 = queue.slice(0, length);
        for (let i = 0; i < length; i++) {
            let top = queue.shift();
            
            if (top.left) {
                queue.push(top.left);
            }
            if (top.right) {
                queue.push(top.right);
            }
            if (!result[level]) {
                result[level] = []
            }
            // 偶数层从左向右遍历
            if (level%2 === 0) {
                temp = queue2.shift() // 队列（先进先出）出队
            } else {
                temp = queue2.pop()   // 栈（先进后出）出栈
            }
            result[level].push(temp.val);
        }
        level++
    }
    return result
};
// @lc code=end

