//  IIFE for calculating the sum of two numbers and logging the result
(function() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    console.log("The sum is:", sum);
})();

// Function to calculate tax using closure
function calculateTax(taxRate) {
    return function(amount) {
        return amount * taxRate;
    };
}
