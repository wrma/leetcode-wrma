/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
// 思路1：用队列做
var levelOrder = function(root) {
    const queue = [];   // 辅助队列
    const result = [];    // 输出结果
    // 这里的思路是把层级放到每一个对应的node上了
    if (root === null) return result;
    queue.push({
        node: root,
        level: 0
    });
    while (queue.length > 0) {
        const top = queue.shift() // 队顶元素
        if (top.node.left) {
            queue.push({
                node: top.node.left,
                level: top.level + 1
            })
        } 
        if (top.node.right) {
            queue.push({
                node: top.node.right,
                level: top.level + 1
            })
        }
        if (!result[top.level]) {
            result[top.level] = []
        }
        result[top.level].push(top.node.val);
    }
    return result
};

// 思路1：用队列做
var levelOrder = function(root) {
    const queue = [];   // 辅助队列
    const result = [];    // 输出结果
    let level = 0;
    // 这里的思路是把把每一层层级的东西直接输出
    if (root === null) return result;
    queue.push(root);
    while (queue.length > 0) {
        let levelArr = []
        const length = queue.length
        for (let i = 0; i < length; i++) {
            const top = queue.shift() // 队顶元素
            if (top.left) {
                queue.push(top.left);
            } 
            if (top.right) {
                queue.push(top.right);
            }
            levelArr.push(top.val)
        }
        result[level++] = levelArr;
    }
    return result
};
// @lc code=end

