const generatePassword = (length) => {
   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowercase = uppercase.toLowerCase();
   const specialCharacters = "!@#$%^&*()-_=+[]{}|;:<>?";
   const number = "0123456789";

   const allCharacters = uppercase + lowercase + specialCharacters + number;

   let password = "";
   password += uppercase[Math.floor(Math.random() * 27)] || "A";
   password += lowercase[Math.floor(Math.random() * 27)] || "A";
   password += specialCharacters[Math.floor(Math.random() * 27)] || "#";
   password += number[Math.floor(Math.random() * 10)] || "0";

   for (let i = 0; i < length - 4; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)] || "*";
   }
   password = shufflePass(password);
   return password;
};

const shufflePass = (str) => {
   const array = str.split("");
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array.join("");
};

console.log(generatePassword(64));
