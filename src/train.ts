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

const getDigits = (str: string): string => {
  return str
    .split("")
    .filter((ele) => {
      if (!isNaN(+ele)) {
        return ele;
      }
    })
    .join("");
};

const result: string = getDigits("m14i1t");
console.log("result:", result);
