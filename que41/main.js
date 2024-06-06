"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgYellowBright("\n\n\t...........Question #41..........\n"));
function show_magicians(magicians) {
    magicians.forEach(name => console.log(chalk_1.default.green.underline(name)));
}
let magician_names = ["Harry Potter", "Misha", "Babar"];
show_magicians(magician_names);
