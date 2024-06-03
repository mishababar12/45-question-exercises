"use strict";
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgCyanBright("\n\n\t........Question #29........"));
let favorite_fruits = ["mango", "apple", "banana"];
if (favorite_fruits.includes("mango")) {
    console.log(chalk_1.default.blue.underline("\n.......I really like Mangoes........"));
}
if (favorite_fruits.includes("apple")) {
    console.log(chalk_1.default.blue.underline("\n.........I really like Apple........."));
}
if (favorite_fruits.includes("banana")) {
    console.log(chalk_1.default.blue.underline("\n.........I really like Banana........."));
}
if (favorite_fruits.includes("orange")) {
    console.log(chalk_1.default.blue.underline("\n.........I really like Orange.........."));
}
if (favorite_fruits.includes("grapes")) {
    console.log(chalk_1.default.blue.underline("\n..........I really like Grapes.........."));
}
