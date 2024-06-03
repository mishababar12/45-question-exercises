"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\t\t.......Question #14.........\n"));
let guests = ["Misha", "Babar", "Jina", "Kiran", "Aneeqa"];
guests.forEach(guest => console.log(chalk_1.default.blue(`\nsalam ${guest} would you like to diner with me ?`)));
