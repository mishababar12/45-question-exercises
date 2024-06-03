"use strict";
//Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgRedBright("\n\n\t.........Question #28........."));
console.log(chalk_1.default.redBright.underline("\n*****Stages OF Life*****\n"));
let personage = 22;
if (personage < 2) {
    console.log(chalk_1.default.yellow("\nPerson is a baby :)"));
}
else if (personage >= 2 && personage < 4) {
    console.log(chalk_1.default.yellow("\nPerson is a toddler :)"));
}
else if (personage >= 4 && personage < 13) {
    console.log(chalk_1.default.yellow("\nPerson is a kid :)"));
}
else if (personage >= 13 && personage < 20) {
    console.log(chalk_1.default.yellow("\nPerson is a teenager :)"));
}
else if (personage >= 20 && personage < 65) {
    console.log(chalk_1.default.yellow("\nPerson is an adult :)"));
}
else if (personage >= 65) {
    console.log(chalk_1.default.yellow("\nPerson is an elder :)"));
}
