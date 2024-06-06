"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgCyanBright("\n\n\t.........Question #37........"));
function make_shirt(size = "large", text = "i love typescript") {
    console.log(chalk_1.default.cyan.underline(`\nCreating a ${size} shirt and print ${text} on shirt:")\n`));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love javascript");
