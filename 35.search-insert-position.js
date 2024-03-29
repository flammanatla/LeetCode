/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[nums.length-1] < target) {
        return nums.length;
    }
    if (nums[0] > target) {
        return 0;
    }
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        
        if (nums[i] > target) {
            return i;
        }
    }
};
// @lc code=end

