// Solution 1: Brute force, O(n^2) time and O(1) space complexity
function twoSumSolution1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

// Solution 2: A lot faster than the first solution because this solution only loops the array once
// O(n) time and O(n) space complexity
function twoSumSolution2(nums: number[], target: number): number[] {
  const prevMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in prevMap) {
      return [prevMap[diff], i];
    }
    prevMap[nums[i]] = i;
  }
}
