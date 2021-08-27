// Create an object

// const person = {
//     name: "Lorraine",
//     age: 42,
//     favSongs: [
//         "Madness - Madness",
//         "Louie Louie - Toots and the Maytals",
//         "Blank Expression - The Specials",
//         "Embarassment - Madness"
//     ]
// };
// console.log(person.favSongs[1]);



// Print individual items in the object
// console.log(person["name"])
// console.log(person.name)

// console.log(person.age)

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee.",
//     lunchOffer: "Free drink with surprisingly priced sandwich.",
//     noOffer: "Sorry no offer.",

//     // -------Function within an object-------
//     openCafe() {
//         if (this.hasSpecialOffers) {
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe() {
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(offer)
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(offer);
// } else {
//     console.log(offer);
// }


// let alarm = "";
// let day = "Saturday";

// const alarmClock = {
//     weekendAlarm: "No alarm needed.",
//     weekdayAlarm: "Get up at 7am",
// };

// if (day == "Saturday" || day == "Sunday") {
//     alarm = alarmClock.weekendAlarm;
//     console.log(`Hello Lorraine: ${alarm}`)
// } else {
//     alarm = alarmClock.weekdayAlarm;
//     console.log(`Hello Lorraine: ${alarm}`)
// }