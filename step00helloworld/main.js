"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
let greeting = "\n\t\tHello World";
console.log(chalk_1.default.bgGreenBright.underline(greeting));
console.log(chalk_1.default.yellow("\nI am Misha Babar learning typescript:)"));
