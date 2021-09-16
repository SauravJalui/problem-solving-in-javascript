//* https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//* Brute force solution (2 Pointer approach):
//* Time complexity: O(n^2)
//* Space complexity: O(1)

const twoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

//* Optimised solution: Using HashMap(Object in JavaScript)
//* Time Complexity: O(n)
//* Space Complexity: O(n)

const twoSum = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const numsVal = nums[p];
    const currentMapVal = numsMap[numsVal];

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - numsVal;
      numsMap[numToFind] = p;
    }
  }
  return null;
};

//* Optimised solution: Using HashMap(Object in JavaScript)
//* Time Complexity: O(n)
//* Space Complexity: O(n)

const twoSum = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const numsVal = nums[p];
    const currentMapVal = numsMap[numsVal];

    if (currentMapVal !== undefined) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - numsVal;
      numsMap[numToFind] = p;
    }
  }
  return null;
};
