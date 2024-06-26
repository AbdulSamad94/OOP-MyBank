#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t\t\t\t WELCOME TO THE MY-BANK\n "));
class Person {
    name;
    accountNumber;
    amountInBank;
    constructor(name, accountNumber, amountInBank) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.amountInBank = amountInBank;
    }
}
let p1 = new Person("smth", randomNumberGenerator(), 0);
function randomNumberGenerator() {
    return Math.floor(Math.random() * 9001 + 1000);
}
async function Program() {
    let askingOptions = await inquirer.prompt([{
            name: "asking",
            message: chalk.yellow("Select the option.."),
            type: "list",
            choices: ["Register new bank account"]
        }]);
    askingOptions = askingOptions.asking;
    let askingName = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: chalk.yellowBright.bold("Enter your name...")
        }]);
    p1.name = askingName.name;
    if (p1.name === "") {
        console.log(chalk.red.bold("Please enter a valid name.."));
        process.exit();
    }
    let askingAmount = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: chalk.yellowBright.bold("Enter the amount you want to store in your bank account..")
        }]);
    p1.amountInBank = askingAmount.amount;
    if (p1.amountInBank != p1.amountInBank) {
        console.log(chalk.red.bold("> Enter a valid amount"));
        process.exit();
    }
    function waiting(newfunction) {
        setTimeout(() => {
            console.log(chalk.greenBright.bold("\n> Your new bank account has been made..\n"));
            console.log(chalk.red(`> Your bank account number is ${chalk.red.bold(p1.accountNumber)}\n`));
            newfunction();
        }, 2000);
    }
    async function afterWaiting() {
        let askingLogin = await inquirer.prompt([{
                name: "login",
                type: "number",
                message: chalk.yellowBright("Enter your bank account number..")
            }]);
        askingLogin = askingLogin.login;
        if (askingLogin != p1.accountNumber) {
            console.log(chalk.red.bold("> Enter a valid bank account number..\n"));
            process.exit();
        }
        function againWaiting(theWAiiiit) {
            setTimeout(() => {
                console.log(chalk.white.bold(`\n> Welcome to 'MY-BANK' "${p1.name}".. \n`));
                theWAiiiit();
            }, 3000);
        }
        async function againAfterWaiting() {
            let askingNewOption = await inquirer.prompt([{
                    name: "newOptions",
                    type: "list",
                    message: chalk.yellowBright.bold("Want you want to do ?"),
                    choices: ["View Details", "Withdraw", "Exit"]
                }]);
            askingNewOption = askingNewOption.newOptions;
            if (askingNewOption === "View Details") {
                console.log(chalk.greenBright.bold("\t\t\t\n Viewing Details\n\t"));
                console.log(chalk.greenBright.bold(`> Author name : ${p1.name}`));
                console.log(chalk.greenBright.bold(`> Account number : ${p1.accountNumber}`));
                console.log(chalk.greenBright.bold(`> Total Amount : ${p1.amountInBank}`));
                process.exit();
            }
            else if (askingNewOption === "Withdraw") {
                let withdraw = await inquirer.prompt([{
                        name: "widhtdrawing",
                        type: "number",
                        message: chalk.yellow.bold("Enter the amount you want to widhtdraw..")
                    }]);
                withdraw = withdraw.widhtdrawing;
                let remainingAmount = p1.amountInBank - withdraw;
                if (withdraw != withdraw) {
                    console.log(chalk.red.bold("> Enter a valid amount"));
                    process.exit();
                }
                else if (withdraw > p1.amountInBank) {
                    console.log(chalk.red.bold("> You don't have that much amount in your bank account!"));
                    process.exit();
                }
                console.log(chalk.green(`\n> ${withdraw} widthdrawed.. `));
                console.log(chalk.green(`> ${remainingAmount} remaining in your bank account`));
            }
            else {
                process.exit();
            }
        }
        againWaiting(againAfterWaiting);
    }
    waiting(afterWaiting);
}
Program();
