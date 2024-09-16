"use strict";
function arrInverse(arr) {
    const invertedArray = [...arr].reverse();
    return invertedArray;
}
const standardNumbers = [1, 2, 3, 4, 5];
const standardStrings = ["a", "b", "c", "d", "e"];
const reversedNumbers = arrInverse(standardNumbers);
const reversedStrings = arrInverse(standardStrings);
console.log(standardNumbers);
console.log(reversedNumbers);
console.log(standardStrings);
console.log(reversedStrings);
