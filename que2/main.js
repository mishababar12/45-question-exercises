"use strict";
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
//such as, “Hello Eric, would you like to learn some Python today?”
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlue("\n\t\t..........Question #02............\n"));
let personName = "Eric";
console.log(chalk_1.default.green(`"Hello ${personName}, would you like to learn some python today?"`));
