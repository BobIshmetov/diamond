// G-TASK: 

/*

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga 
osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

*/

function getHighestIndex(arr:number[]){
    if(arr){
        let maxvalue = Math.max(...arr);
        return arr.indexOf(maxvalue);
    }
}

const array = [5, 21, 12, 21, 8];

console.log(getHighestIndex(array));