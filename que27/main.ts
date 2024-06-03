//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

import chalk from "chalk" ;

console.log(chalk.bgBlackBright("\n\n\t.........Question #27..........\n"))
       
let alien_color1 = "green" ;

       console.log(chalk.green("\n.....First Version....."))

if(alien_color1 == "green"){
    console.log(chalk.red("\nYou shot down green , \n player earned 5 point."))
}
else if(alien_color1 == "yellow"){
    console.log(chalk.red("\nYou shot down yellow , \n player earned 10 points."))
}
else if(alien_color1 == "red"){
    console.log(chalk.red("\nYou shot down red , \n player earned 15 points."))
}
let alien_color2 = "yellow" ;

       console.log(chalk.green("\n.....Second Version....."))

if(alien_color2 == "green"){
    console.log(chalk.red("\nYou shot down green , \n player earned 5 points."))
}
else if(alien_color2 == "yellow"){
    console.log(chalk.red("\nYou shot down yellow , \n player earned 10 points."))
}
else if(alien_color2 == "red"){
    console.log(chalk.red("\nYou shot down red , \n player earned 15 points."))
}
let alien_color3 = "red" ;

       console.log(chalk.green("\n.....Third Version....."))

if(alien_color3 == "green"){
    console.log(chalk.red("\nYou shot down green , \n player earned 5 points.."))
}
else if(alien_color3 == "yellow"){
    console.log(chalk.red("\nYou shot down yellow , \n player earned 10 points.."))
}
else if(alien_color3 == "red"){
    console.log(chalk.red("\nYou shot down red , \n player earned 15 points.."))
}
