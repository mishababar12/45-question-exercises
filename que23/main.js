"use strict";
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlackBright("\n\n\t.......Question #23......\n"));
let pencil = "blue";
let pen = "black";
//test 1
console.log(chalk_1.default.green("\ntest 1 : pencil is equal to blue?"));
console.log(pencil == "blue");
//test 2 
console.log(chalk_1.default.yellow("\ntest 2 : pen is equal to black?"));
console.log(pen == "black");
//test 3 
console.log(chalk_1.default.green("\ntest 3 : pencil is not equal to black?"));
console.log(pencil != "black");
//test 4 
console.log(chalk_1.default.yellow("\ntest 4 : pen is not equal to blue?"));
console.log(pen != "blue");
//test 5
console.log(chalk_1.default.green("\ntest 5 : pencil is greater than pen?"));
console.log(pencil > pen);
//test 6
console.log(chalk_1.default.yellow("\ntest 5 : pencil is not equal to blue?"));
console.log(pencil != "blue");
//test 7
console.log(chalk_1.default.green("\ntest 7 : pen is not equal to black?"));
console.log(pen != "black");
//test 8
console.log(chalk_1.default.yellow("\ntest 8 : pencil is not greater tha pen?"));
console.log(pencil < pen);
//test 9 
console.log(chalk_1.default.green("\ntest 9 : pen is not greater tha pencil?"));
console.log(pen > pencil);
//test 10
console.log(chalk_1.default.yellow("\ntest 10 : pen is equal to pencil?"));
console.log(pen == "pencil");
