"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized
// with the person’s name.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\t\t.........Question #12.........\n"));
let names = ["Misha", "Babar", "Sana", "Hina", "Mina"];
names.forEach(name => console.log(chalk_1.default.yellow(`\nHello ! ${name} Assalam o alaikum friend how are you?`)));
