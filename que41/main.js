//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
import chalk from "chalk";
console.log(chalk.bgYellowBright("\n\n\t...........Question #41..........\n"));
function show_magicians(magicians) {
    magicians.forEach(name => console.log(chalk.green.underline(name)));
}
let magician_names = ["Harry Potter", "Misha", "Babar"];
show_magicians(magician_names);
