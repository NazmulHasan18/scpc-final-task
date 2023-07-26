function Reverse(str) {
   let reverseStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
      const element = str[i];
      reverseStr += element;
   }
   return reverseStr;
}
console.log(Reverse("Hello world!"));
