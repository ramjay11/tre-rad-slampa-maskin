// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the Slut Machine
// 5. Check if the player won
// 6. Give tje player their winnings
// 7. Spin again

// Collect deposit
// function deposit(amount) {
//     return 1;
// }

const prompt = require("prompt-sync")();

const deposit = () => {
    const depositAmount = prompt("Enter deposit amount: ");
    //console.log(`You entered: ${depositAmount}`);
    // Convert to a number
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.")
    //return depositAmount;
};

deposit();