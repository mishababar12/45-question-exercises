"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlackBright("\n\n\t..........Question #19..........\n"));
let guests = ["Misha", "Lina", "Hira", "Babar"];
let lengthGuests = guests.length;
console.log(chalk_1.default.green(`\nTotal number of people invite for dinner are : ${lengthGuests} . `));
