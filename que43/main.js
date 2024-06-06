"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that you have one array of 
//the original names and one array with the Great added to each magician’s name.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlueBright("\n\n\t...........Question #43............\n"));
function show_magicians(magicians) {
    magicians.forEach(name => console.log(chalk_1.default.blue.underline(name)));
}
function make_great(magicians) {
    return magicians.map(name => chalk_1.default.blue.underline `\nThe great ${name}`);
}
let magicians_names = ["Harry Potter", "Misha", "Babar"];
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
show_magicians(magicians_names);
show_magicians(copy_great_magicians);
