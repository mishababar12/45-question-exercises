"use strict";
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgCyanBright("\n\n\t........Question #20........\n"));
let countryNames = ["Pakistan", "London", "America", "New York"];
console.log(chalk_1.default.green("\n\tList of county names\n"));
countryNames.forEach(names => console.log(chalk_1.default.yellow(names)));
