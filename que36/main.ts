//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
//should be printed on the shirt. The function should print a sentence summarizing the 
//size of the shirt and the message printed on it. Call the function.

import chalk from "chalk";

console.log(chalk.bgGreenBright("\n\n\t..........Question #36..........\n"))

function make_shirt (size : string , text : string){
    console.log(chalk.green.underline(`\nYou selected ${size} size shirt and print ${text} on shirt:)\n`)) 
}
make_shirt("medium" , "code with misha")

make_shirt("small" , "nextcola")

make_shirt("large" , "sipup")