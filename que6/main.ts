//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

import chalk from "chalk" ;

console.log(chalk.bgGreen("\n\t\t.........Question #06..........\n"))

let whitespacecharater = "\n\tmisha babar\t\n" ;
console.log(chalk.redBright(whitespacecharater))

let withoutwhitespacecharacter = whitespacecharater.trim()
console.log(chalk.red(withoutwhitespacecharacter))