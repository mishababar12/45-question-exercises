"use strict";
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\n\t...........Question #38........."));
function describe_city(city, country = "Pakistan") {
    console.log(chalk_1.default.grey.underline(`\n${city} is in ${country}")`));
}
describe_city("karachi");
describe_city("lahore");
describe_city("sydney", "Australia");
