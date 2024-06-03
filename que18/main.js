"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order. 
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
// its order has changed.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\n\t........Question #18..........\n"));
let places = ["Canada", "London", "America", "Australia", "Italy"];
//print in original order
console.log(chalk_1.default.red("\nOriginal order:", places));
//print in alphabetical order without modifying org array
console.log(chalk_1.default.red("\nAlphabetical order:", [...places].sort()));
//still in original order 
console.log(chalk_1.default.red("\nStill in original order:", places));
//in reverse order without chnaging original list
console.log(chalk_1.default.red("\nReverse order without changing origanl list:", [...places].reverse()));
//still in origial order
console.log(chalk_1.default.red("\nStill in original order:", places));
//reverse order n print to show that its order has changed
console.log(chalk_1.default.red("\nReverse order with changing original list:", places.reverse()));
//reverse order and show order is back to its original way
console.log(chalk_1.default.red("\nReverse order and back its original list:", places.reverse()));
//sort array and show its order has been changed
console.log(chalk_1.default.red("\nAlphabetical order:", places.sort()));
//sort to change in reverse alphabetical order and show it has changed
console.log(chalk_1.default.red("\nOriginal array reverse again:", places.reverse()));
