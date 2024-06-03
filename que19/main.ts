//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.

import chalk from "chalk" ;

console.log(chalk.bgBlackBright("\n\n\t..........Question #19..........\n"))
let guests = ["Misha" , "Lina" , "Hira" , "Babar"]

let lengthGuests:number = guests.length ;

console.log(chalk.green(`\nTotal number of people invite for dinner are : ${lengthGuests} . `))