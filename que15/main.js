"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of 
//the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlackBright("\n\t\t........Question #15........\n"));
let guests = ["Misha", "Bilal", "Maaz"];
console.log(chalk_1.default.red(`${guests[1]} did not come for dinner :(`));
guests.splice(1, 1, "leena");
guests.forEach(guest => console.log(chalk_1.default.red(`\nSalam ${guest}, would you like to dinner with me ?`)));
