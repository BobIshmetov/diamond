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
/******************************************************************************* */

/**
 ZG-TASK

String sifatida berilgan string parametrni
snake case'ga o'tkazib beradigan function yozing.

MASALAN: convertToSnakeCase('name should be a string')
return 'name_should_be_a_string'
*/
//JAVOB

// function convertToSnakeCase(input: string): string {
//   return input.toLowerCase().replace(/\s+/g, "_");
// }

// console.log(convertToSnakeCase("name should be a string"));
/******************************************************************************* */

/**
ZH-TASK:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]*/

// function findDisappearedNumbers(arr: number[]): number[] {
//   const maxNum = Math.max(...arr);
//   const allNumbers = Array.from({ length: maxNum }, (_, i) => i + 1);
//   return allNumbers.filter((num) => !arr.includes(num));
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7]));
/******************************************************************************* */

/**

ZI-TASK:

Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
MASALAN: delayHelloWorld("Hello World") return "Hello World"
*/

// async function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, 3000);
//   });
// }

// (async () => {
//   const result = await delayHelloWorld("Hello World");
//   console.log(result);
// })();
/******************************************************************************* */

/**

ZJ-TASK:

Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

*/

//JAVOB

// function reduceNestedArray(arr: any[]): number {
//   return arr.reduce((sum, item) => {
//       if (Array.isArray(item)) {
//           return sum + reduceNestedArray(item);
//       } else if (typeof item === "number") {
//           return sum + item;
//       }
//       return sum;
//   }, 0);
// }

// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log(result);

/******************************************************************************* */

/**
TASK ZK:

Shunday function yozing, bu function har bir soniyada bir marotaba
console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
5 soniyadan so'ng function o'z ishini to'xtatsin
  
MASALAN: printNumbers(); 

*/
//JAVOB

// function raqamChopEt() {
//   let currentNumber = 1;
//   const intervalId = setInterval(() => {
//     console.log(currentNumber);
//     if (currentNumber === 5) {
//       clearInterval(intervalId);
//     }
//     currentNumber++;
//   }, 1000);
// }

// raqamChopEt();
/******************************************************************************* */

/**ZL-TASK:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin.
Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
*/
//JAVOB

// function stringToKebab(input: string): string {
//   return input.trim().toLowerCase().replace(/\s+/g, "-");
// }

// console.log(stringToKebab("I love Kebab"));
/******************************************************************************* */

/**ZM-TASK:

Shunday function yozing, uni array va number parametri bolsin. 
Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
*/
//JAVOB
// function rotateArray(arr: number[], index: number): number[] {
//   const rotatedPart = arr.slice(index + 1);
//   const remainingPart = arr.slice(0, index + 1);
//   return rotatedPart.concat(remainingPart);
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
/******************************************************************************* */

/**ZN-TASK:

Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true
*/

//JAVOB

// function areParenthesesBalanced(str: string): boolean {
//   let balance = 0;

//   for (const char of str) {
//     if (char === "(") {
//       balance++;
//     } else if (char === ")") {
//       balance--;
//     }

//     if (balance < 0) {
//       return false;
//     }
//   }

//   return balance === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
// console.log(areParenthesesBalanced("((qavslar noto'g'ri balansda"));
// console.log(areParenthesesBalanced("qavslar))ham noto'g'ri("));
/******************************************************************************* */
/**
 ZO-TASK:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

 */

//JAVOB

// function countNumberAndLetters(input: string): {
//   number: number;
//   letter: number;
// } {
//   let result = { number: 0, letter: 0 };

//   for (let char of input) {
//     if (char >= "0" && char <= "9") {
//       result.number++;
//     } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       result.letter++;
//     }
//   }

//   return result;
// }

// console.log(countNumberAndLetters("strinAEWFW857445g152%\\¥")); // { number: 3, letter: 6 }

/******************************************************************************* */

/** 
ZP-TASK:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]
*/

//JAVOB

// function findDuplicates(arr: number[]): number[] {
//   const countMap = arr.reduce((map, num) => {
//     map[num] = (map[num] || 0) + 1;
//     return map;
//   }, {} as { [key: number]: number });

//   return Object.keys(countMap)
//     .filter((key) => countMap[Number(key)] > 1)
//     .map(Number);
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

/******************************************************************************* */

/**
 ZQ-TASK:

Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

 */

//JAVOB

// function singleNumber(arr: number[]): number | null {
//   const frequency = new Map<number, number>();

//   for (const num of arr) {
//     frequency.set(num, (frequency.get(num) || 0) + 1);
//   }

//   for (const [key, value] of frequency.entries()) {
//     if (value === 1) {
//       return key;
//     }
//   }

//   return null;
// }

// console.log(singleNumber([5, 4, 2, 1, 2, 1]));
// console.log(singleNumber([4, 2, 1, 2, 1, 5]));

/******************************************************************************* */
/**
 
ZR-TASK:

Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
MASALAN: firstUniqueCharIndex(“stamp”) return 0
 */

//JAVOB

// function firstUniqueCharIndex(s: string): number {
//   const charCount: Record<string, number> = {};

//   for (const char of s) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (charCount[s[i]] === 1) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(firstUniqueCharIndex("stamp"));
/******************************************************************************* */

/**
 ZS-TASK:

Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
MASALAN: sumOfUnique([1,2,3,2]) return 4
 */

//JAVOB

// function sumOfUnique(nums: number[]): number {
//   const count: Map<number, number> = new Map();

//   for (const num of nums) {
//     count.set(num, (count.get(num) || 0) + 1);
//   }

//   let uniqueSum = 0;
//   count.forEach((freq, num) => {
//     if (freq === 1) {
//       uniqueSum += num;
//     }
//   });

//   return uniqueSum;
// }

// const result = sumOfUnique([1, 2, 3, 2]);
// console.log(result);

/******************************************************************************* */

/*
ZT-TASK:

Shunday function yozing, u parametridagi array ichidagi barcha nollarni array oxiriga qoyib qolgan raqamlar ketma-ketligini saqlasin.
MASALAN: moveZeroes([0, 1, 0, 3, 12]) return [1, 3, 12, 0, 0] 
*/

//JAVOB

function moveZeroes(nums: number[]): number[] {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
