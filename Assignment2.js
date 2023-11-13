// Write a program that prints the first 10 multiples of a given number. If the number is negative or zero, print an error message.

let number = 5;

if (number <= 0) {
    console.log("enter a positive non-zero number.");
} else {
    console.log(`First 10 multiples of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
Multiples(inputNumber);
  