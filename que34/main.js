"use strict";
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
// such as I really love pizza!
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgRedBright("\n\n\t...........Question #34.........\n"));
let pizzas = ["tikka", "fajita", "cheesy"];
for (let onepizza of pizzas) {
    console.log(chalk_1.default.red.underline(`\nI like ${onepizza} pizzas.`));
}
console.log(chalk_1.default.red.underline("\nPizza is lovee."));
console.log(chalk_1.default.red.underline("\nI eat pizza."));
