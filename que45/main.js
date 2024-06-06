"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive
// a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or 
//an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreenBright("\n\n\t.........Question #45........\n"));
function create_car(manufacturer, model, ...options) {
    const create_car = Object.assign({ manufacturer,
        model }, Object.assign({}, ...options));
    return create_car;
}
let answer = create_car("Honda", "Civic", {
    color: "blue",
    feature: ["navigation", "power window"],
});
console.log(answer);
