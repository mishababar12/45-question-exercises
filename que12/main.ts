//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized
// with the person’s name.

import chalk from "chalk" ;

console.log(chalk.bgGreenBright("\n\t\t.........Question #12.........\n"))

let names = ["Misha" , "Babar" , "Sana" , "Hina" ,"Mina"]

names.forEach(name => console.log(chalk.yellow(`\nHello ! ${name} Assalam o alaikum friend how are you?`)));

