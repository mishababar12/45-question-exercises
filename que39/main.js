//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
import chalk from "chalk";
console.log(chalk.bgRedBright("\n\n\t.........Question #39.........."));
function city_country(city, countrty) {
    return chalk.red.underline.blue(`\n${city} , ${countrty}`);
}
console.log(city_country("lahore", "pakistan"));
console.log(city_country("chicago", "America"));
console.log(city_country("tokyo", "Japan"));
