"use strict";
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgRedBright("\n\n\t.........Question #39.........."));
function city_country(city, countrty) {
    return chalk_1.default.red.underline.blue(`\n${city} , ${countrty}`);
}
console.log(city_country("lahore", "pakistan"));
console.log(city_country("chicago", "America"));
console.log(city_country("tokyo", "Japan"));
