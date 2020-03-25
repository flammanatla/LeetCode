/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

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