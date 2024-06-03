"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry 
//you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlackBright("\n\n\t.........Question #17........\n"));
//make new guests list array
let guests = ["Misha", "Babar", "Sana", "Hina"];
//delete guest from original array
console.log(chalk_1.default.green(guests[1], "did not come for dinner?"));
//remove element and add new elemst from original array 
guests.splice(1, 3, "Rania");
//message print for found a bigger table
console.log(chalk_1.default.yellow("\nfriends! I found a bigger dinner table."));
//add new element to starting of original array 
guests.unshift("Jina");
//add new element to last of original array
guests.push("Ayaan");
//add new element to middle of original array
let middleelement = Math.floor(guests.length / 2);
guests.splice(middleelement, 0, "Danish");
//print new set of invitations for each guest
guests.forEach(guest => console.log(chalk_1.default.green(`\nSalam! ${guest}, you are invited for dinner.`)));
//continue question 17 :
console.log(chalk_1.default.yellow("\nUnfortunately , the new dinner table won't arrive on time so i can invite only two guests dinner with me."));
//remove guest from list
while (guests.length > 2) {
    let removeguest = guests.pop();
    console.log(chalk_1.default.green(`\nsorry , ${removeguest} i can't invite you to dinner .`));
}
// guest who are still invited 
console.log(chalk_1.default.yellow("\nInvitations to last two guests:"));
guests.forEach(guest => console.log(chalk_1.default.green(`\nluckly ${guest} you are still invited for dinner.`)));
//remove two last elements and have an empty list
guests.pop();
guests.pop();
console.log(chalk_1.default.bgBlue("\nempty list", guests));
