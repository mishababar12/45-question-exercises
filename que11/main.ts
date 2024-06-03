//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each
// element in the list, one at a time.

import chalk from "chalk";

console.log(chalk.bgRedBright("\n\t\t.........Question #11..........\n"))

let friends = ["Maaz" , "Niha" , "Bilal" , "Babar"]
 friends.forEach(friend => console.log(chalk.blue(friend)))
