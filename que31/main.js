"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlackBright("\n\n\t..........Question #31........\n"));
let usernames = ["Ali", "Mahad", "Admin", "Mani"];
usernames = [];
if (usernames.length === 0) {
    console.log(chalk_1.default.green.underline("\nYour array is empty we need to find some users!\n"));
}
else {
    usernames.forEach(username => {
        if (username === "admin") {
            console.log(chalk_1.default.green.underline(`Hello! ${username} would you like to see a status report?\n`));
        }
        else {
            console.log(chalk_1.default.green.underline(`Hello! ${username} thankyou for logging in again.\n`));
        }
    });
}
