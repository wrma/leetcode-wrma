/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路1：把0冒泡到最后一个 O(n^2)
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++ ) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === 0) {
                // 交换
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
};


// 思路2：统计数组中0元素的个数，并删除，在末尾统一插入 O(n) 
var moveZeroes = function(nums) {
    let counts = 0;
    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] === 0) {
            counts++;
            nums.splice(i, 1);
            i--;
        }
    }
    nums.push(...new Array(counts).fill(0));
};
// note: 在原数组操作时，使用splice操作需要记得更改索引


// 双指针法
var moveZeroes = function(nums) {
    let i = 0, j;
    for (j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
};

// 双指针法，将不为0的数移动到数组前端，记录不为0的索引，最后将末位填充上0
// 和上面的方法相比其实很相似，只是上一种方式用交换的方式，这里用的是覆写的方式
var moveZeroes = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0){
            nums[i] = nums[j];
            i++;
        }
    }
    for(; i< nums.length; i++) {
        nums[i] = 0;
    }
};
// @lc code=end

/**
 * 双指针法：
1. 交换数据（交换+覆写）
2. 首部指针，首尾指针
3. 明确每个指针的含义
notice: 
1. 交换回来的数据如果没有经过i(当前指针)走一遍的话，i不能++
2. splice操作后需要对索引进行处理
3. 当有需要遍历所有值的i指针时，使用for循环更好，否则使用while能更准确地看清指针走向
延伸到多指针法（快排的三路快排）
 */


