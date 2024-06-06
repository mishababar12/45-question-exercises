"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
//and titlecase.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlackBright("\n\t\t.........Question #03.........\n"));
let name1 = "misha babar";
console.log(chalk_1.default.cyan.underline("\nIn Lowercase :", name1.toLowerCase()));
console.log(chalk_1.default.cyan.underline("\nIn Uppercase:", name1.toUpperCase()));
console.log(chalk_1.default.cyan.underline("\nIn Titlecase:", name1.charAt(0).toUpperCase() +
    name1.slice(1, 5).toLowerCase() + " " + name1.charAt(6).toUpperCase() + name1.slice(7, 11)));
