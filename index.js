#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const rainbowTitle = chalkAnimation.rainbow(`************************* 
\nLet's start calculation\n\n*************************`);
rainbowTitle.start();
setTimeout(() => {
    rainbowTitle.stop();
    welcome();
}, 2000);
async function welcome() {
    console.log(chalk.blueBright(`

    _____________________
   |  _________________  |
   | |              0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|

   `));
    let input1 = await inquirer.prompt([
        {
            name: "number1",
            type: "number",
            message: "Enter first value: ",
        },
    ]);
    let input2 = await inquirer.prompt([
        {
            name: "number2",
            type: "number",
            message: "Enter second value: ",
        },
    ]);
    let operation = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            message: "Enter Operation",
        },
    ]);
    console.log(chalk.bgBlueBright("First Number: ", input1.number1));
    console.log(chalk.bgGreenBright("Second Number: ", input2.number2));
    console.log(chalk.bgMagentaBright("Operator: ", operation.operator));
    switch (operation.operator) {
        case "Addition":
            console.log(chalk.bgRedBright("Answer: ", input1.number1 + input2.number2));
            break;
        case "Subtraction":
            console.log(chalk.bgRedBright("Answer: ", input1.number1 - input2.number2));
            break;
        case "Multiplication":
            console.log(chalk.bgRedBright("Answer: ", input1.number1 * input2.number2));
            break;
        case "Division":
            console.log(chalk.bgRedBright("Answer: ", input1.number1 / input2.number2));
            break;
    }
}
