//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

import chalk from "chalk" ;

console.log(chalk.bgGreenBright("\n\t\t.......Question #14.........\n"))

let guests = ["Misha" , "Babar" , "Jina" , "Kiran" , "Aneeqa"]

guests.forEach(guest => console.log(chalk.blue(`\nsalam ${guest} would you like to diner with me ?`))) ;
