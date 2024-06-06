"use strict";
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
//should be printed on the shirt. The function should print a sentence summarizing the 
//size of the shirt and the message printed on it. Call the function.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\n\t..........Question #36..........\n"));
function make_shirt(size, text) {
    console.log(chalk_1.default.green.underline(`\nYou selected ${size} size shirt and print ${text} on shirt:)\n`));
}
make_shirt("medium", "code with misha");
make_shirt("small", "nextcola");
make_shirt("large", "sipup");
