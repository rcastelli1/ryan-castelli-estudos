"use strict";
function numberSquared(num) {
    if (typeof num === 'number') {
        return Math.pow(num, 2);
    }
    else if (num instanceof Array) {
        return num.map((num) => Math.pow(num, 2));
    }
    else {
        throw new Error("Número inválido");
    }
}
console.log(numberSquared(5));
console.log(numberSquared([7, 10, 2, 4, 5]));
