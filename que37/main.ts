//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.

import chalk from "chalk" ;

console.log(chalk.bgCyanBright("\n\n\t.........Question #37........"))

function make_shirt (size : string  = "large", text : string = "i love typescript"){
      console.log(chalk.cyan.underline(`\nCreating a ${size} shirt and print ${text} on shirt:")\n`))
}
make_shirt()
make_shirt("medium")
make_shirt("small" , "i love javascript")