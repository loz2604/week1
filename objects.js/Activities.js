// -------Activity 1 -------

// const person = {
//     name: "Lorraine",
//     age: 42,
//     favSongs: [
//         "Madness - Madness",
//         "Louie Louie - Toots and the Maytals",
//         "Blank Expression - The Specials",
//         "Embarassment - Madness"
//     ],
//     sayHi() {
//         return `Hello, my name is ${this.name}`;
//     }
// };
// // ----- Add a song to the list ----
// person.favSongs.push("Hello - Lionel Richie");
// console.log(person.sayHi());
// console.log(person.favSongs);


//  ------------ Activity 2 ------------------

// const pet = {
//     name: "Clyde",
//     age: "2 years old",
//     colour: "Black and white",
//     typeOfPet: "Cat",
//     hunger: 40,
//     thirst: 40,
//     health: 50,
//     happiness: 50,
//     tiredness: 50,
//     eat() {
//         if (this.hunger <= 0) {
//             return `${this.name} is not hungry.`
//         } else {
//             pet.thirst = pet.thirst + 10;
//             pet.hunger = pet.hunger - 10;
//             pet.health = pet.health + 10;
//             pet.happiness = pet.happiness + 10;
//             console.log(`${this.name} is eating.\nHer health, happiness and thirst have increased and her hunger has decreased.`);
//             return `Health - ${this.health}, Happiness - ${this.happiness}, Hunger - ${this.hunger}, Thirst - ${this.thirst}`;
//         }
//     },
//     drink() {
//         if (this.thirst <= 0) {
//             return `${this.name} is not thirsty.`
//         } else {
//             pet.thirst = pet.thirst - 10;
//             pet.health = pet.health + 5;
//             pet.happiness = pet.happiness + 5;
//             console.log(`${this.name} is drinking.\nHer health and happiness have increased and her thirst has decreased.`);
//             return `Health - ${this.health}, Happiness - ${this.happiness}, Thirst - ${this.thirst}`;
//         }
//     },
//     sleep() {
//         if (this.tiredness <= 0) {
//             return `${this.name} is not tired, maybe she wants to play.`
//         } else {
//             pet.tiredness = pet.tiredness - 20;
//             pet.thirst = pet.thirst + 10;
//             pet.hunger = pet.hunger + 20;
//             pet.health = pet.health + 10;
//             pet.happiness = pet.happiness + 10;
//             console.log(`${this.name} is sleeping.\nHer health, happiness, hunger and thirst have increased and her tiredness has decreased.`);
//             return `Health - ${this.health}, Happiness - ${this.happiness}, Hunger - ${this.hunger}, Thirst - ${this.thirst}, Tiredness - ${this.tiredness}`;
//         }
//     },
//     play() {
//         if (this.tiredness >= 100) {
//             return `${this.name} is tired, maybe she wants to sleep.`
//         } else {
//             pet.tiredness = pet.tiredness + 20;
//             pet.hunger = pet.hunger + 10;
//             pet.thirst = pet.thirst + 10;
//             pet.health = pet.health + 10;
//             pet.happiness = pet.happiness + 10;
//             console.log(`${this.name} is playing.\nHer health, happiness, hunger, tiredness and thirst have increased.`);
//             return `Health - ${this.health}, Happiness - ${this.happiness}, Hunger - ${this.hunger}, Thirst - ${this.thirst}, Tiredness ${this.tiredness}`;
//         }
//     },
//     toilet() {
//         pet.hunger = pet.hunger + 20;
//         pet.happiness = pet.happiness + 10;
//         console.log(`${this.name} is otherwise engaged.\nHer happiness and hunger have increased.`);
//         return `Happiness - ${this.happiness}, Hunger - ${this.hunger}`;
//     }
// };

// console.log(pet.drink());
// console.log(pet.play());
// console.log(pet.eat());
// console.log(pet.toilet());
// console.log(pet.sleep());


// --------------- Activity 3 ---------------
// ----------- need to finish --------------

// let yourDrinksOrder = ("Coffee");
// let yourFoodOrder = ("Egg Barm");
// let yourOrder = (yourDrinksOrder + yourFoodOrder);

// const coffeeShop = {
//     branch: "Manchester",
//     drinks: [
//         "Tea", 1.50,
//         "Coffee", 2.50,
//         "Hot Chocolate", 2.50,
//         "Lemonade", 2.00,
//         "Orange Juice", 2.00
//     ],

//     food: [
//         "Bacon Barm", 2.50,
//         "Sausage Barm", 2.50,
//         "Egg Barm", 2.00,
//         "Cheese Salad Barm", 2.00,
//         "Ham Salad Barm", 2.00
//     ],

// foodOrdered() {
//     for (let x = 0; x < yourFoodOrder.length; x++) {
//         for (let y = 0; y < this.food.length; y++) {
//             if ((yourFoodOrder[x].toLowerCase()) != (this.food[y].toLowerCase())) {
//                 return `${this.food[y]}`;
//             }
//         }
//     }
// },

// drinksOrdered() {
//     for (let j = 0; j < yourDrinksOrder.length; j++) {
//         for (let i = 0; i < this.drinks.length; i++) {
//             if ((yourDrinksOrder[j]) === (this.drinks[i])) {
//                 return `${this.drinks[i]}`;
//             }
//         }
//     }
// }
// };

// ---------- Then add the prices together, print the order, prices and total -------
// console.log(coffeeShop.drinks);

// console.log(coffeeShop.drinksOrdered());