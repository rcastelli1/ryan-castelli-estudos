"use strict";
function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sum(1, 2, 3, 4, 5));
