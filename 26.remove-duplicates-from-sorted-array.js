/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (43.63%)
 * Likes:    2172
 * Dislikes: 4562
 * Total Accepted:    848.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * 
 * 
 * Given nums = [1,1,2],
 * 
 * Your function should return length = 2, with the first two elements of nums
 * being 1 and 2 respectively.
 * 
 * It doesn't matter what you leave beyond the returned length.
 * 
 * Example 2:
 * 
 * 
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * Your function should return length = 5, with the first five elements of nums
 * being modified to 0, 1, 2, 3, and 4 respectively.
 * 
 * It doesn't matter what values are set beyond the returned length.
 * 
 * 
 * Clarification:
 * 
 * Confused why the returned value is an integer but your answer is an array?
 * 
 * Note that the input array is passed in by reference, which means
 * modification to the input array will be known to the caller as well.
 * 
 * Internally you can think of this:
 * 
 * 
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 * 
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len
 * elements.
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums === []) {
        return 0;
    } 
    if (nums.length === 1) {
        return 1;
    }

    var acc;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === acc) {
            deleteElement(i, nums);
            i--;
        }
        acc = nums[i];
    }
    return nums.length;
};

function deleteElement(index, array) {
    array.splice(index, 1);
}

module.exports = removeDuplicates;
// @lc code=end

