//Cars: Write a function that stores information about a car in a Object. The function should always receive
// a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or 
//an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

import chalk from "chalk" ;

console.log(chalk.bgGreenBright("\n\n\t.........Question #45........\n"))
function create_car(
    manufacturer:string,
    model:string,
    ...options: { [key:string] :any } []):
    object {
        const create_car = {
            manufacturer,
            model,
            ...Object.assign({} , ...options),
        };
        return create_car ;
    }
let answer = create_car("Honda","Civic",{
    color:"blue",
    feature:["navigation" , "power window"],
});
console.log(answer)

    