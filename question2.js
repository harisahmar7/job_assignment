function arraySum(nums, target) {
    if (nums.length <= 1) {
      return nums;
    };
    const map = {};
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      const remain = target - nums[i];
      if (map.hasOwnProperty(remain)) {
        arr.push([map[remain], i]);
      }
      map[nums[i]] = i;
    }
    return arr;
}

const nums = [2, 11, 7, 5, 4, 15];
const target = 9;

console.log(arraySum(nums, target))