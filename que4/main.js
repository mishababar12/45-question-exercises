"use strict";
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\t\t..........Question #04...........\n"));
let quote = "A person never made a mistake never tried anything new.";
let author = "Elbert Einstein";
console.log(chalk_1.default.yellow(`${author} once said , "${quote}"`));
