//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.

import chalk from "chalk" ;

console.log(chalk.bgRedBright("\n\n\t...........Question #44...........\n"))
function make_sandwiches(...items : string[]){
    console.log(chalk.blue.underline("\nMaking a sandwich by following ingredients:\n"))
    items.forEach(oneitem => console.log(chalk.red.underline("-" + oneitem)))
    console.log(chalk.redBright.underline("\nNow enjoy sandwiches!"))
}
        
make_sandwiches("cheese", "egg" , "lettuce" , "chicken")
make_sandwiches("tomatoes" , "mayyonaise" , "chicken", "ketchup")
make_sandwiches("chicken" , "bread" , "butter" , "mayonnaise")