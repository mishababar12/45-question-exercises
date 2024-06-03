"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgYellowBright("\n\t\t.......Question #13........\n"));
let transportations = ["Bike", "Rickshaw", "Car", "Bus"];
transportations.forEach(transport => console.log(chalk_1.default.green(`\nI would like to own a ${transport}.`)));
