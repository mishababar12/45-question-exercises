"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite
// to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print
// a new set of invitation messages, one for each person in your list.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgCyanBright("\t\n\n\t.......Question #16.......\n"));
//make new guests list array
let guests = ["Misha", "Babar", "Sana", "Hina"];
//delete guest from original array
console.log(chalk_1.default.yellow(guests[1], "did not come for dinner?"));
//remove element and add new element from original array 
guests.splice(1, 3, "rania");
//message print for found a bigger table
console.log(chalk_1.default.yellow("\nFriends! I found a bigger dinner table."));
//add new element to starting of original array 
guests.unshift("jina");
//add new element to last of original array
guests.push("ayaan");
//add new element to middle of original array
let middleelement = Math.floor(guests.length / 2);
guests.splice(middleelement, 0, "danish");
//print new set of invitations for each guest
guests.forEach(guest => console.log(chalk_1.default.yellow(`\nSalam! ${guest}, you are invited for dinner.`)));
