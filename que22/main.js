"use strict";
//Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgRedBright("\n\n\t..........Question #22.........\n"));
let array = ["abc", "jkl", "ilh", "opq"];
console.log(chalk_1.default.green("\nIndex Error : ", array[6]));
console.log(chalk_1.default.green("\nCorrect Error : ", array[2]));
