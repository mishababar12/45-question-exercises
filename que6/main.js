"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGreen("\n\t\t.........Question #06..........\n"));
let whitespacecharater = "\n\tmisha babar\t\n";
console.log(chalk_1.default.redBright(whitespacecharater));
let withoutwhitespacecharacter = whitespacecharater.trim();
console.log(chalk_1.default.red(withoutwhitespacecharacter));
