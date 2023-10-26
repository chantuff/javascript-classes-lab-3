
// attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

// class Hamster  {
//     constructor(name) {
//     this.owner = '',
//     this.name = name
//     this.price = 15
//     }

    // methods:
    // wheelRun() - log "squeak squeak"
    // eatFood() - log "nibble nibble"
    // getPrice() - return the price
// wheelRun() {
//     console.log('squeak squeak');
// }
// eatFood() {
//     console.log('nibble nibble');
// }
// getPrice() {
//     return this.price
//     }
// }

// Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created person class"
// Easy Mode Keep Going and save and run code

// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.


// Instantiate a new Person named Timmy
let timmy = {
    firstName: "Timmy",
    // Age Timmy five years
    age: 5,   
}

// Have him eat five times.
function eat() {
    console.log('Timmy is eating')
}

for (let i = 1; i <=5; i++) {
eat();
}

// Have him exercise five times
function exercise() {
    console.log('Timmy is exercising')
}
for (let i = 1; i<= 5; i++) {
    console.log('Exercise ' + i);
    exercise();
}

// Age Timmy 9 years
timmy.age+= 9;

// create a hamster named "Gus"
let gus = {
    name: gus,
    species: 'Hamster'
}

// Set Gus's owner to the string "Timmy"
gus.owner = 'Timmy';

// Have Timmy "buy" Gus
let gus = {
    price: 15
}

// Age Timmy 15 years
timmy.age+= 15;

// Have Timmy eat twice
function eat() {
    console.log('Timmy is eating')
}
function haveTimmyEat(times) {
    for (let i = 1; i<= times; i++) {
        console.log('Meal ' + i);
        eat();
    }
}

haveTimmyEat(2);

// have Timmy exercise twice
function exercise() {
    console.log('Timmy is exercising')
}
for (let i = 1; i<= times; i++) {
    console.log('Exercise ' + i);
    exercise();
}
haveTimmyExercise(2);





















