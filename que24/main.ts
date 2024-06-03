//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

import chalk from "chalk" ;

console.log(chalk.bgGreenBright("\n\n\t........Question #24.......\n"))

let lemon = "lemon";
let uppercase = "LEMON";
let five = 5;
let six = 6;
let names = ["misha" , "babar" , "hina"]
//.................................//
console.log(chalk.blue("\n...Test with equality or unequality..."))

console.log("\nis lemon is equal to lemon?")
console.log(lemon == "lemon")
console.log("\nis lemon is not equal to lemon?")
console.log(lemon != "lemon")
//....................................//
console.log(chalk.blue("\n....Test with lower case..."))

console.log("\nis lemon is equal to lemon after converting in lowercase?")
console.log(uppercase.toLowerCase() == "LEMON")
console.log("\nis lemon is not equal to lemon after converting in lower case?")
console.log(uppercase.toLowerCase() != "lEMON")
//....................................//
console.log(chalk.blue("\n...Test with numerical equality or unequality...\n"))

console.log("\nis five is equal to six?")
console.log(five == six)
console.log("\nis five is not equal to six?")
console.log(five != six)
//....................................//
console.log(chalk.blue("\n...Test with less than or greater than...\n"))

console.log("\nis five is greater than 4?")
console.log(five > 4)
console.log("\nis five is less than 3?")
console.log(five < 3)
//..............................//
console.log(chalk.blue("\n...Test with less than equal or greater than equal...\n"))

console.log("\nis five is greater than or equal to 3?")
console.log(five >= 3)
console.log("\nis five is less than or equal to 2?")
console.log(five <= 2)
//........................................//
console.log(chalk.blue("\n....Test with 'and' operators..."))

console.log("\nfive is not equal to 6 and six is greater than 5?")
console.log(five != 6 && 6 > 5)
console.log("\nfive is not equal to 6 and six is greater than 10?")
console.log(five != 6 && 6 > 10)
//.....................................//
console.log(chalk.blue("\n...Test with 'or' operators..."))

console.log("\nfive is greater than 10 or five is equal to 5?")
console.log(five > 10 || five == 5)
console.log("\nfive is less than 3 or five is greater than 12?")
console.log(five < 3 || five > 12)
//..........................................//
console.log(chalk.blue("\n...Test whether item is in array..."))

console.log("\nis misha is in my array?")
console.log(names.includes("misha"))
//.......................................//
console.log(chalk.blue("\n...Test whether item is not in array..."))

console.log("\nis misha is not is in my array?")
console.log(!names.includes("misha"))



