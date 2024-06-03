"use strict";
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each
// element in the list, one at a time.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgRedBright("\n\t\t.........Question #11..........\n"));
let friends = ["Maaz", "Niha", "Bilal", "Babar"];
friends.forEach(friend => console.log(chalk_1.default.blue(friend)));
