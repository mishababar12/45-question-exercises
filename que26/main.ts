//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

import chalk from "chalk" ;

console.log(chalk.bgGrey("\n\n\t............Question #26............"))

let alien_color = "green";

                console.log(chalk.green("\n.....First Version.....\n"))

 if(alien_color == "green"){
    console.log(chalk.yellow("Alien's color is green so : \n player just earned 5 points.."))
 }
 else{
    console.log(chalk.yellow("Alien's color is not green so , \n player earned 10 points.."))
 }
       
                console.log(chalk.green("\n.....Second version.....\n"))

 if(alien_color === "blue"){
    console.log(chalk.yellow("I am come from if statement."))
 }
 else{
    console.log(chalk.yellow("I am come from else statement."))
 }