// -----------Practise if else-------------

// let Child = "£8";
// let Adult = "£10.95";
// let Senior = "7.50";
// let age = "19";

// if (age < 18) {
//     console.log(`That will be ${Child} please.`);
// }
// else if (age > 18 && age < 60) {
//     console.log(`That will be ${Adult} please.`);
// }
// else {
//     console.log(`That will be ${Senior} please.`)
// }

// -------------- Functions -----------------

//  ----------- Using Function Declaration -----------

// function factorial(n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n - 1))
//     }
// }
// console.log(factorial(3))

// --------- Using Arrow Syntax, Still a Function -----------

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n - 1))
//     }
// }

// console.log(factorial(3))

// ------------- Functions Examples ------------

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// ---------Another Example----------

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind.");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin.");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();

// -----------Another Example ---------------

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// ------------ Another Example using a global variable -----------

// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// ---------Example using a return function -----------

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// //  ---------- stores result in function but doesnt output it -----------
// addUp(7, 3);   
// // ---------- outputs the result ----------   
// console.log(addUp(2, 5));

// --------- Example of using a functioon within a function --------------

// const multiplyByNineFifths = (celcius) => {
//     return celcius * (9 / 5);
// };

// const getFahrenheit = (celcius) => {
//     return multiplyByNineFifths(celcius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F");

