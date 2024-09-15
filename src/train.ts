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

function findLongestWord(str: string): string {
  const ajrat = str.split(" ");

  let uzunsoz = "";

  for (let i = 0; i < ajrat.length; i++) {
    if (ajrat[i].length > uzunsoz.length) {
      uzunsoz = ajrat[i];
    }
  }

  return uzunsoz;
}
const result = findLongestWord("I come from Uzbekistan");
console.log(result);
