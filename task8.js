const findSecondSmallestNumber = (arrNum) => {
   const newArr = [];
   arrNum.forEach((num) => {
      if (!newArr.includes(num)) {
         newArr.push(num);
      }
   });
   const sortedArr = newArr.sort((a, b) => {
      return a - b;
   });
   return sortedArr[1];
};
const array = [
   1, 3, 5, 4, 5, 6, 7, 4, 8, 9, 34, 34, 12, 4, 3, 5, 32, 32512, 231, 32, 32, 432, 432, 3, 232, 4, 32, 32, 4,
   4, 23,
];

console.log(findSecondSmallestNumber(array));
