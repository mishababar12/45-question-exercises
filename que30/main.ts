//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
// writing code that will print a greeting to each user after they log in to a website. Loop through the array,
// and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

import chalk from "chalk" ;

console.log(chalk.bgGreenBright("\n\n\t..........Question #30.........\n"))

let usernames = ["Babar" , "Shaan" , "Admin" , "Maaz" , "Haris"]

usernames.forEach(username => {
    if(username === "admin"){
        console.log(chalk.green.underline(`\nHello! ${username} , would you like to see a status report.`))
    }
    else{
            console.log(chalk.green.underline(`\nHello! ${username} , thankyou for logging in again.`))
        
    }
})
