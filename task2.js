const arr = [2, -5, 10, -3, 7];

function addPositiveNum(numArr) {
   let sum = 0;
   for (let i = 0; i < numArr.length; i++) {
      const element = numArr[i];
      if (element > 0) {
         sum += element;
      }
   }
   return sum;
}

console.log(addPositiveNum(arr));
