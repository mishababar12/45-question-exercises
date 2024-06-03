//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
import chalk from "chalk";
console.log(chalk.bgGreenBright("\n\n\t............Question #42..........."));
function show_magicians(magicians) {
    magicians.forEach(name => console.log(chalk.yellow.underline(name)));
}
function make_great(magicians) {
    return magicians.map(name => chalk.yellow.underline `\nThe great ${name}`);
}
let magicians_names = ["Harry Potter", "Misha", "Babar"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
