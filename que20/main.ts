//Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

import chalk from "chalk" ;

console.log(chalk.bgCyanBright("\n\n\t........Question #20........\n"))

let countryNames = ["Pakistan" , "London" , "America" , "New York"]

console.log(chalk.green("\n\tList of county names\n"))
countryNames.forEach(names => console.log(chalk.yellow(names)));
