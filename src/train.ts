// G-TASK:

/*

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga 
osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

*/

// function getHighestIndex(arr: number[]) {
//   if (arr) {
//     let maxvalue = Math.max(...arr);
//     return arr.indexOf(maxvalue);
//   }
// }

// const array = [5, 21, 12, 21, 8];

// console.log(getHighestIndex(array));
//---------------------------------------------------------------------------------------------------------

/*H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"*/

// function getPositive(arr: number[]) {
//   let str: string = "";
//   for (let i: number = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       str += `${arr[i]}`;
//     }
//   }
//   return str;
// }

// console.log(getPositive([1, -4, 2]));
//--------------------------------------------------------------------------------------------------------------

/*H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin.
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"*/

// const getDigits = (str: string): string => {
//   return str
//     .split("")
//     .filter((ele) => {
//       if (!isNaN(+ele)) {
//         return ele;
//       }
//     })
//     .join("");
// };

// const result: string = getDigits("m14i1t");
// console.log("result:", result);
//********************************************************************** */
/*Project Standarts:
  -Logging standarts
  -Naming standarts:
      function, method, variable => CAMEL case    goHome
      class =>                                    MemberService
      folder => KEBAB 
      css => SNAKE                                button_style 
  
  -Error handling
*/
/******************************************************************* */

/**Eng ko`p ishlatiladiga API
 Traditional Api
 Rest api
 GraphQL Api
 ...
 */
/***************************************************************************************************** */
/**
  I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

  */

// function majorityElement(arr: number[]): number | null {
//   let elementMap: { [key: number]: number } = {};
//   let maxCount = 0;
//   let majorityElement: number | null = null;

//   // Raqamlar necha marta uchraganini hisoblaymiz
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     elementMap[num] = (elementMap[num] || 0) + 1;

//     // Eng ko'p takrorlangan raqamni topamiz
//     if (elementMap[num] > maxCount) {
//       maxCount = elementMap[num];
//       majorityElement = num;
//     }
//   }

//   return majorityElement;
// }

// // Misol
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
//********************************************************************** */

/**Frontendni qurishning ikki xil development jarayoni mavjud
 -Traditional FD => BSSR  => EJS
 -Modern FD => SPA => REACT
 */

/*********************************************************************** */

/** J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

//JAVOB

// function findLongestWord(str: string): string {
//   const ajrat = str.split(" ");

//   let uzunsoz = "";

//   for (let i = 0; i < ajrat.length; i++) {
//     if (ajrat[i].length > uzunsoz.length) {
//       uzunsoz = ajrat[i];
//     }
//   }

//   return uzunsoz;
// }
// const result = findLongestWord("I come from Uzbekistan");
// console.log(result);
/****************************************************************************************************** */

/**K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/

//JAVOB

// function countVowels(str: string) {
//   const array = str.split("");
//   return array.filter((letter) => "aeiou".includes(letter)).length;
// }

// console.log("K-TASK:", countVowels("string"));
/*************************************************************************************************************** */

/** Validation:
 Frontend validation
 Backend validation
 Database validation
  
 */
/******************************************************************************************************************** */

/** L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/

//JAVOB

// function reverseSentence(sentence: string): string {
//   // Stringni bo'sh joylar orqali so'zlarga ajratamiz
//   const words = sentence.split(" ");

//   // Har bir so'zni chappasiga aylantirib yangi arrayga qo'shamiz
//   const reversedWords = words.map((word) => word.split("").reverse().join(""));

//   // Chappasiga bo'lgan so'zlarni bo'sh joy bilan birlashtiramiz
//   return reversedWords.join(" ");
// }

// console.log(reverseSentence("we like coding!"));

/************************************************************************************************* */

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

//JAVOB

// function getSquareNumbers(numbers: number[]) {
//   const result: any[] = [];
//   for (let num of numbers) {
//     result.push({
//       number: num,
//       square: num * num,
//     });
//   }
//   return result;
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log("M-TASK", result);

/******************************************************************************************************** */

/**N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda
ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/

//JAVOB

// function palindromCheck(suz: string): boolean {
//   const cleanedSuz = suz.toLowerCase();

//   const reversedSuz = cleanedSuz.split("").reverse().join("");

//   // Asl so'z va teskari so'zni taqqoslaymiz
//   return cleanedSuz === reversedSuz;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

/******************************************************************************************************** */

/**O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45*/

//JAVOB

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
/****************************************************************************************************** *****************/

/*P-TASK:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni  qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   const result: [string, any][] = [];

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push([key, obj[key]]);
//     }
//   }

//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 })); // [['a', 10], ['b', 20]]

/*********************************************************************************************************************** */

/** Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false*/

//JAVOB

// function hasProperty(obj: object, prop: string): boolean {
//   return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
/*********************************************************************************************************************** */

/**R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda
string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;*/

// function calculate(sonlar: string): number {
//   const numbers = sonlar.split("+").map(Number);

//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(calculate("1+3"));
// console.log(calculate("10+20+30"));
/*************************************************************************************************************************** */

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

//JAVOB

function missingNumber(nums: number[]): number {
  const n = nums.length;

  const totalSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);

  return totalSum - actualSum;
}

console.log(missingNumber([3, 0, 1]));
