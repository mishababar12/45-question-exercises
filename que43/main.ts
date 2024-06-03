//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that you have one array of 
//the original names and one array with the Great added to each magician’s name.

import chalk from "chalk" ;

console.log(chalk.bgBlueBright("\n\n\t...........Question #43............\n"))

function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(chalk.blue.underline(name)))
}

function make_great(magicians : string[]){
    return magicians.map(name => chalk.blue.underline`\nThe great ${name}`)
}
let magicians_names = ["Harry Potter" , "Misha" , "Babar"]

let copy_magicians_names = magicians_names.slice()

let copy_great_magicians = make_great(copy_magicians_names)
show_magicians(magicians_names)
show_magicians(copy_great_magicians)
