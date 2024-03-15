
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(number => number * 2);
const evenNumbers = doubledNumbers.filter(number => number % 2 === 0);
for (let i = 0; i < evenNumbers.length; i++) {
    console.log(evenNumbers[i]);
}
