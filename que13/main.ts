//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

import chalk from "chalk";

console.log(chalk.bgYellowBright("\n\t\t.......Question #13........\n"))
let transportations = ["Bike" , "Rickshaw" , "Car" , "Bus"]

transportations.forEach(transport => console.log(chalk.green(`\nI would like to own a ${transport}.`)));