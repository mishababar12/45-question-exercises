"use strict";
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgCyanBright("\n\t\t..........Question #05........\n"));
let quote = "A person who never made a mistake never tried anything new.";
let famous_person = "Elbrt Einstein";
let message = `${famous_person} once said , ${quote}`;
console.log(chalk_1.default.cyanBright(message));
