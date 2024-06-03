//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

import chalk from "chalk" ;

console.log(chalk.bgBlackBright("\n\n\t..........Question #31........\n"))

let usernames = ["Ali" , "Mahad" , "Admin" , "Mani"]
usernames = []

if(usernames.length === 0){
    console.log(chalk.green.underline("\nYour array is empty we need to find some users!\n"))
}
else{
    usernames.forEach(username =>{
    if(username === "admin"){
        console.log(chalk.green.underline(`Hello! ${username} would you like to see a status report?\n`))
    }else{
        console.log(chalk.green.underline(`Hello! ${username} thankyou for logging in again.\n`))
    }
    } )
}