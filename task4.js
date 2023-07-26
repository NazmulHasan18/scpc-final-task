function findTwoNumbersWithTargetSum(sortedArray, target) {
   let left = 0;
   let right = sortedArray.length - 1;

   while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];

      if (sum === target) {
         return [left, right];
      } else if (sum > target) {
         right--;
      } else {
         left++;
      }
   }

   return [];
}

const sortedArray = [1, 3, 6, 7, 11, 15];
const target = 9;
const indices = findTwoNumbersWithTargetSum(sortedArray, target);
console.log(indices);
