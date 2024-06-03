"use strict";
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and
// assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player
// just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will
// have no output.)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgBlueBright("\n\n\t........Question #25......."));
let alien_color = "green";
if (alien_color == "green") {
    console.log(chalk_1.default.bgCyan("\nAlien color is green so , \n player just earned 5 points ."));
}
if (alien_color == "red") {
    console.log(chalk_1.default.bgCyan("\nPlayer not earned points ."));
}
