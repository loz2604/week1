//  ----------- Activity 1 ------------ Change from function declaration to arrow ayntax ------------------

// function factorial(n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n - 1))
//     }
// }
// console.log(factorial(3))

// --------- Using Arrow Syntax, Still same Function -----------

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n - 1))
//     }
// }
// console.log(factorial(3))

//  -------------Activity 2 ---------- Function taking two parameters and running order updated -------------

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}.`);
//     orderCount++;
// }

// takeOrder("Tuna", "Olives");
// takeOrder("Pepperoni", "Chicken")
// console.log(orderCount);

// ------------ Activity 3 - Cash Machine ----------------

// const pinNumber = 1334;
// const balance = 327;
// let attempts = 0;

// const cashWithdrawal = (pin, amount) => {
//     if ((pinNumber != pin) && (attempts <= 1)) {
//         attempts++;
//         console.log("Incorrect pin number, please try again.")
//         // console.log("You have had " + attempts + " attempts");
//     } else if ((pinNumber != pin) && (attempts == 2)) {
//         console.log("Please contact your bank to retrieve your card.")
//     } else if ((pinNumber === pin) && (amount > balance)) {
//         console.log("Sorry, you have insufficient funds.")
//     } else {
//         console.log("Your cash is being dispensed.");
//     }
// }

// cashWithdrawal(1334, 50);
// cashWithdrawal(1334, 5005);
// cashWithdrawal(1563, 5005);
// cashWithdrawal(1356, 5005);
// cashWithdrawal(7894, 5005);

// --------- Extra Challenges -------------

// const string = ("Something")
// const sentence = (string, text) => {
//     console.log(string, text);
// }

// sentence(string, "is better than nothing.")


// const rectanglePerimeter = (length, width) => {
//     return (length * 2) + (width * 2);
// }
// console.log("The perimeter of your rectangle is " + rectanglePerimeter(2, 4) + "cm.");


// const largerNumber = (num1, num2) => {
//     if (num1 > num2) {
//         console.log(`${num1} is larger than ${num2}`)
//     } else {
//         console.log(`${num2} is larger than ${num1}`)
//     }
// }

// largerNumber(454, 98);