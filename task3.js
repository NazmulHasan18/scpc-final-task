const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
function arrToObjConverter(numArr) {
   const objOfArr = {};

   numArr.forEach((num) => {
      if (objOfArr[num]) {
         objOfArr[num]++;
      } else {
         objOfArr[num] = 1;
      }
   });

   let mostFrequentNum;
   let mostFrequency = 0;

   for (const element in objOfArr) {
      if (objOfArr[element] > mostFrequency) {
         mostFrequentNum = element;
         mostFrequency = objOfArr[element];
      }
   }
   return mostFrequentNum;
}
console.log(arrToObjConverter(arr));
