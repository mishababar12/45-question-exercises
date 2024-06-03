//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

import chalk from "chalk" ;

console.log(chalk.bgCyanBright("\n\n\t........Question #29........"))
let favorite_fruits = ["mango" , "apple" , "banana"]

if(favorite_fruits.includes("mango")){
    console.log(chalk.blue.underline("\n.......I really like Mangoes........"))
}
if(favorite_fruits.includes("apple")){
    console.log(chalk.blue.underline("\n.........I really like Apple........."))
}
if(favorite_fruits.includes("banana")){
    console.log(chalk.blue.underline("\n.........I really like Banana........."))
}
if(favorite_fruits.includes("orange")){
    console.log(chalk.blue.underline("\n.........I really like Orange.........."))
}
if(favorite_fruits.includes("grapes")){
    console.log(chalk.blue.underline("\n..........I really like Grapes.........."))
}
