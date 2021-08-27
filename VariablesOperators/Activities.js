// // ----------Variables and Operators---------

// // Activity 1

// let name = 'Lorraine';
// let age = 42;
// let favColour = 'green';

// console.log(`Hi my name is ${name}, I am ${age}, and my favourite colour is ${favColour}`);

// name = 'Loz';
// favColour = 'red';

// console.log(`Hi my name is ${name}, I am ${age}, and my favourite colour is ${favColour}`);

// // Activity 2

// let breakfast = 'toast';
// let lunch = 'ommelette';
// let dinner = 'sausage casserole';

// console.log(`This morning I had ${breakfast} for breakfast, I will have an ${lunch} for lunch, and ${dinner} for dinner.`);

// breakfast = 'muesli';
// lunch = 'crumpets';
// dinner = 'pasta bake';

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`)

// // Activity 3

// // let today = new Date();
// // let birthday = new Date (1979, 03, 26);
// // console.log (birthday);
// // console.log (today);


// // Activity 4

// let space1 = ('x');
// let space2 = ('o');
// let space3 = (' ');
// let space4 = ('x');
// let space5 = ('x');
// let space6 = (' ');
// let space7 = ('o');
// let space8 = (' ');
// let space9 = (' ');

// x = "       |       |       "
// y = "- - - - - - - - - - - -"
// line2 = "  ${space1}  |  ${space2}  |  ${space3}  "
// line6 = "  ${space4}  |  ${space5}  |  ${space6}  "
// line10 = "  ${space7}  |  ${space8}  |  ${space9}  "
// for(let i = 0; i < 11; i++) {
//     if (i == 3) {console.log(y);}
//     else if (i  == 1) {console.log(line2)}
//     else if (i == 5) (console.log(line6))
//     else if (i == 9) (console.log(line10))
//     else if (i == 7) {console.log(y);}
//     else {console.log(x);}
// }

// -----------if, else, switch----------

// Activity 1

// let age = 16

// if (age > 17) {
//     console.log("Yes I can serve you.");
// } 
// else {
//     console.log("You aren't old enough.");
// }

// let age = 18
// let country = "France"

// if (age > 17 && country === "UK") {
//     console.log("Yes I can serve you.")
// }
// else {
//     console.log("I am sorry I can't serve you.")
// }

// Activity 2

// let favToppings = "prawns, spinach, mushrooms"
// let okToppings = "tuna, sweetcorn, olives"
// let topping = "pepperoni"

// if (topping == favToppings) {
//     console.log("These are important ingriedients for my pizza.");
// }
// else if (topping == okToppings) {
//     console.log(`I don't mind having ${topping} on my pizza.`);
// }
// else {
//     console.log(`${topping} should not be on any pizza.`)
// }

// // Activity 3

// let password = "password"

// if (password.length < 8) {
//     console.log("The password is too short.");
// }
// else{
//     console.log(`${password}`)
// }

// // Activity 3.5

// num = 21

// if (num % 5 == 0 || num % 3 == 0) {
//     console.log("This number is divisible by 3 or 5.")
// }
// else{
//     console.log("This number is not divisible by 3 or 5.")
// }

// // Activity 4

// num = 10

// if (num % 5 == 0 && num % 3 == 0) {
//     console.log("fizz buzz");
// }
// else if (num % 3 == 0) {
//     console.log("fizz");
// }
// else if (num % 5 == 0) {
//     console.log("buzz");
// }
    // else{
    //     console.log("This number is not divisible by 3 or 5.")
    // }
// Activity 5 --------- need to reverse the number, then compare to number to see if its the same-----

String = "12345";
StringBuilder(num);


// let num = 12345;
// let reversedNumber = 0;

// while (num > 0) {
//     reversedNumber  = reversedNumber*10 + num %10;
//     num = num / 10;
// }

// console.log(reversedNumber);

// let num = 1234

// function reverseInteger(num) {
//     let reversedInteger = 0;
//     let rem = 0;

// while (num > 0 ) {
//     reversedInteger *= 10;
//     rem = num % 10;
//     num = (num - rem) / 10;

//     reversedInteger += rem;
// }
//     return reversedInteger;
//     console.log(reversedInteger);
// }

// Activity 6

// let time = 8
// let placeOfWork = "work"
// let townOfHome = "Old Trafford"

// if (time <= 7) {
//     console.log(`I'm at home, in the wonderful ${townOfHome}, home of the Mighty Reds!`);
// } else if (time > 7 && time < 9) {
//     console.log("I am commuting");
// } else {
//     console.log(`I am at ${placeOfWork}.`)
// }

// Activity 7

// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = ["a", "e", "i", "o", "u"];

// let pos = string.lastIndexOf(vowels)
// console.log(string.lastIndexOf(vowels))
// console.log(string.lastIndexOf(vowels));


// Activity 8

// let word = "Lorraine";
// let first = (word.charAt(0))
// let last = (word.charAt(word.length-1))
// if (first.toLowerCase() == last.toLowerCase()) {
//     console.log("true")
// }
// else console.log("false");

// Activity 9

// let num1 = 123;
// let num2 = 456;
// let added = num1 + num2;
// let multiplied = num1 * num2;
// if (added % 2 == 0) {
//     console.log(added);
// } else {
//     console.log(multiplied)
// }
