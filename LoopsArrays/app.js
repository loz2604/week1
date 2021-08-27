// -----------------Arrays--------------------

// let arrayExample = ["Pepsi", 2, true, "Another string"]

// for (let i = 0; i < arrayExample.length; i++){
//     console.log(arrayExample[i]);
// }

// console.log(arrayExample[1]);
// arrayExample[2] = false;
// console.log(arrayExample);
// console.log(arrayExample.length);
// arrayExample.push("Pushed string");
// console.log(arrayExample);
// console.log(arrayExample.length);
// arrayExample.pop();
// console.log(arrayExample);
// console.log(arrayExample.length);

// let favSongs = ["Ghost Town", "Embarassment", "Blank Expression"]

// console.log(favSongs);
// favSongs.push("Pressure Drop");
// console.log(favSongs);
// favSongs.unshift("Louie Louie");
// console.log(favSongs);
// favSongs.pop();
// console.log(favSongs);


// ---------------- for loops ---------------

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(multiplesTwo)

// ------------ while loops --------------

// let age = 15;

// while (age < 18) {
//     console.log("You're a child!");
//     age++;
// }
// console.log("You're an adult!")

// ------------- This gives us a random card until a spade is picked -------------
// ---------- The number 4 is the length of the array. could use * cards.length ----------

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while (currentCard != "Spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random() * 4)];  
// }
// console.log(currentCard);