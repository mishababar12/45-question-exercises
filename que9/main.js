"use strict";
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that
// reveals your favorite number. Print that message.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlue("\n\t\t.........Question #09........\n"));
let favoriteNumber = 4;
let message = "My favourite number is = ";
console.log(chalk_1.default.blue(`${message} ${favoriteNumber}`));
