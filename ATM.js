#! /usr/bin/env node
import inquirer from "inquirer";
console.log("*Hi, Welcome to the world of Digital Banking*\n");
let pin = 1010;
console.log("Pin code is (One zero one zero), dont tell to any one!");
let Acctbalance = 10000000;
let pincode = await inquirer.prompt([{
        message: "Please Enter your Pin Code:", type: "number", name: "pin"
    }]);
if (pincode.pin == pin) {
    console.log("\nHurray :) Your Pin code is correct.");
    let condition = true;
    while (condition) 
    //while (true){ 
    {
        let operation = await inquirer.prompt([
            {
                message: "Please Select operation to Perform",
                type: "list",
                name: "perform",
                choices: ["Check Balance", "Withdraw Cash", "Deposit funds", "Fast Cash", "Pay Bills", "Contact Us"]
            }
        ]);
        if (operation.perform == "Check Balance") {
            console.log("Your Account Balance is:", Acctbalance.toLocaleString(), "\nYou are richy rich :)\n");
        }
        else if (operation.perform == "Withdraw Cash") {
            let amount = await inquirer.prompt([{
                    message: "Enter withdrwal Amount:", type: "number", name: "WDamount"
                }]);
            if (amount.WDamount < Acctbalance) {
                console.log("\nYour Balnace Amount is:", (Acctbalance - amount.WDamount).toLocaleString(), "\n");
            }
            else {
                console.log("Your balance is insufficent");
            }
        }
        else if (operation.perform == "Deposit funds") {
            let amount = await inquirer.prompt([{
                    message: "Enter Deposit Amount:", type: "number", name: "Damount"
                }]);
            console.log("\nYour updated Amount is:", (Acctbalance + amount.Damount).toLocaleString(), "\n");
        }
        else if (operation.perform == "Fast Cash") {
            let amount = await inquirer.prompt([{
                    message: "Choose Amount to Withdraw:", type: "list", name: "FCamount",
                    choices: ["10000", "20000", "50000", "100000", "500000", "1000000"]
                }]);
            if (amount.FCamount < Acctbalance) {
                console.log("\nYour balance Amount is:", (Acctbalance - amount.FCamount).toLocaleString(), "\n");
            }
            else {
                console.log("Your balance is insufficent");
            }
        }
        else if (operation.perform == "Pay Bills") {
            console.log("You can Pay your any Bill such as KE, SSGS or Mobile topup");
            let amount = await inquirer.prompt([{
                    message: "Please Put your Cosnumer or UIN Number", type: "number", name: "Number"
                },
                { message: "Please Enter Your Bill Amount", type: "number", name: "BillAmount" }
            ]);
            if (amount.BillAmount < Acctbalance) {
                console.log("\nYour Bill has been paid. \nBalance Amount is:", (Acctbalance - amount.BillAmount).toLocaleString(), "\n");
            }
            else {
                console.log("Your balance is insufficent\n");
            }
        }
        else if (operation.perform == "Contact Us") {
            console.log("\nReach me on \nNPM: https://www.npmjs.com/~talhakhan-tk \nGithub: https://github.com/Talhakhan-TK\n");
        }
        let confirm = await inquirer.prompt([
            { message: "Do you want to logout?", type: "confirm", name: "conf", default: "true" }
        ]);
        condition = !confirm.conf;
    }
    console.log("\n*Thank you for choosing our Bank!! Have a Good Day*");
}
else {
    console.log("Invalid Pin Code, Please dont use someone' else account! ");
}
