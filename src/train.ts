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

// function missingNumber(nums: number[]): number {
//   const n = nums.length;

//   const totalSum = (n * (n + 1)) / 2;

//   const actualSum = nums.reduce((acc, curr) => acc + curr, 0);

//   return totalSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1]));
/******************************************************************************************** */

/*T-TASK:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

*/
//JAVOB

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const mergedArray = [...arr1, ...arr2];

//   return mergedArray.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

/** U-TASK:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;*/

//JAVOB

// function sumOdds(number: number): number {
//   let count: number = 0;
//   for (let i = 1; i < number; i += 2) {
//     count++;
//   }
//   return count;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));
/************************************************************************************************************************************************ */

/**V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
*/
//JAVOB

// function countChars(str: string) {
//   let result: { [key: string]: number } = {};

//   for (let char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// console.log(countChars("hello"));

/**************************************************************************************** */

/*W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]*/

//JAVOB

// function chunkArray(arr: any[], chunkSize: number): any[][] {
//   const result = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     result.push(arr.slice(i, i + chunkSize));
//   }
//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

/****************************************************************************************** */

/**X-TASK:

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda*/

//JAVOB

// function countOccurrences(obj: any, keyToFind: string): number {
//   let count = 0;

//   // Obyektdagi barcha kalitlarni tekshirish
//   for (const key in obj) {
//     if (key === keyToFind) {
//       count++; // Agar kalit mos kelsa, sanash
//     }

//     // Agar obyekt ichida yana obyekt bo'lsa, rekursiv chaqiramiz
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       count += countOccurrences(obj[key], keyToFind);
//     }
//   }

//   return count;
// }

// const obj = { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } };
// console.log(countOccurrences(obj, "model"));
/***************************************************************************** */

/**
 Y-TASK:

Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham 
ishtirok etgan qiymatlarni bir arrayda qaytarsin
MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
 */

//JAVOB

// function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
//   return arr1.filter((value) => arr2.includes(value));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

/****************************************************************************************** */

/**
Z-TASK:

Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
MASALAN: sumEvens([1,2,3]) return 2 */

//JAVOB

// function sumEvens(numbers: number[]): number {
//   return numbers.reduce((sum, num) => {
//     return num % 2 === 0 ? sum + num : sum;
//   }, 0);
// }

// console.log(sumEvens([1, 2, 3]));
/***************************************************************************************** */

/*
ZA-TASK:

Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

*/

//JAVOB

// function sortByAge(objects: { age: number }[]): { age: number }[] {
//   return objects.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));
/***************************************************************************************** */
/**
ZB-TASK:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45

*/
//JAVOB

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(30, 50));
/**************************************************************************************** */
/*
TASK ZC

Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

MASALAN: celsiusToFahrenheit(0) return 32;
MASALAN: celsiusToFahrenheit(10) return 50;

Yuqoridagi misolda, 0°C, 32°F'ga teng.
Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

°C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
*/
//JAVOB

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(45));

/****************************************************************************************** */

/*
TASK ZD

Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda.
*/

//JAVOB

// function changeNumberInArray(
//   index: number,
//   array: number[],
//   newValue: number
// ): number[] {
//   array[index] = newValue;
//   return array;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
/******************************************************************************* */

/**
 ZE-TASK:

Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
MASALAN: removeDuplicate('stringg') return 'string'
 */

//JAVOB
// function removeDuplicate(input: string): string {
//   let uniqueChars = "";
//   for (let char of input) {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars += char;
//     }
//   }
//   return uniqueChars;
// }

// console.log(removeDuplicate("stringg"));
