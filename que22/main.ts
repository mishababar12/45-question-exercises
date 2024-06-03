//Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

import chalk from "chalk" ;

console.log(chalk.bgRedBright("\n\n\t..........Question #22.........\n"))

let array = ["abc" , "jkl" , "ilh" , "opq"]

console.log(chalk.green("\nIndex Error : " ,array[6]));

console.log(chalk.green("\nCorrect Error : " ,array[2]));