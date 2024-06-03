//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

import chalk from "chalk" ;

console.log(chalk.bgYellowBright("\n\n\t.......Question #21.......\n"))

interface school{
      name:string;
      classes:number;
      location:string;
      library:number;
      
}
let school = {
    name: "dare arqam",
    classes: 20,
    location: "gulshan 13-D",
    library: 2
};
console.log(school);
