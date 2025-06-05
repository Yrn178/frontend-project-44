#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {readlineSyncQuestion, generateNumber} from "../src/cli.js";

const calculator = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');
for (let i = 0; i < 3; i++) {
    const randomNum = generateNumber(1, 30);
    const randomNum2 = generateNumber(1, 30);
    let operation = generateNumber(1, 3);
    switch (operation) {
        case 1:
            operation = '+';
            break;
        case 2:
            operation = '-';
            break;
        case 3:
            operation = '*';
            break;
    }
    console.log("Question:", `${randomNum} ${operation} ${randomNum2}` );
    const answer = readlineSync.question('Your answer:');
    if (operation === '+') {
        if (answer == randomNum+randomNum2) {
            console.log("Correct!");
        }
        else if (answer !== randomNum+randomNum2) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNum+randomNum2}'.`);
            console.log(`Let's try again, ${name}!`);
        }
    }
    else if (operation === '-') {
        if (answer == randomNum-randomNum2) {
            console.log("Correct!");
        }
        else if (answer !== randomNum-randomNum2) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNum-randomNum2}'.`);
            console.log(`Let's try again, ${name}!`);
        }
    }
    else if (operation === '*') {
        if (answer == randomNum*randomNum2) {
            console.log("Correct!");
        }
        else if (answer !== randomNum*randomNum2) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNum*randomNum2}'.`);
            console.log(`Let's try again, ${name}!`);
        }
    }
}
console.log(`Congratulations, ${name}!`);
};

calculator();