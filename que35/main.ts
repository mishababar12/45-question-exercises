//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as  ofAny these animals would make a great pet!

import chalk from "chalk" ;

console.log(chalk.bgGreenBright("\n\n\t..........Question #35..........\n"))

let animals = ["cat" , "dog" , "rabbit"]

for(let oneanimal of animals){
    console.log(chalk.green.underline(`\nA ${oneanimal} would make a great pet.`))

}
console.log(chalk.green.underline("\nAny of these animals would make a great pet!"))
