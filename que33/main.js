//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
import chalk from "chalk";
console.log(chalk.bgYellowBright("\n\n\t..........Question #33.........\n"));
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let oneNumber of ordinal_numbers) {
    let ordinal_ending;
    if (oneNumber === 1) {
        ordinal_ending = "st";
    }
    else if (oneNumber === 2) {
        ordinal_ending = "nd";
    }
    else if (oneNumber === 3) {
        ordinal_ending = "rd";
    }
    else {
        ordinal_ending = "th";
    }
    console.log(chalk.yellow(`${oneNumber}${ordinal_ending}`));
}
