'use strict'

function filterArray(numbers, value) {
    let array = []
    for (let i = 0; i < numbers.length; i++) {
        (numbers[i] > value) ? array.push(numbers[i]) : array
    }
    return array
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));