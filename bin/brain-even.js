#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {readlineSyncQuestion, generateNumber} from "../src/cli.js";

const evenOdd = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const randomNum = generateNumber(1, 30);
        console.log("Question:", randomNum);
        const answer = readlineSync.question('Your answer:');
        switch (answer) {
            case "yes":
                if (randomNum % 2 === 0) {
                    console.log('Correct!');
                }
                else{
                    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
                    console.log(`Let's try again, ${name}`);
                }
                break;
            case "no":
                if (randomNum % 2 !== 0) {
                    console.log('Correct!'); 
                }
                else{
                    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
                    console.log(`Let's try again, ${name}`);
                }
                break;
            default:
                if (randomNum % 2 === 0 && i < 2) {
                    console.log(`'${answer}' is wrong answer ;(."Correct answer was 'yes'.`);
                    console.log(`Let's try again, ${name}`);
                }
                else if (randomNum % 2 !== 0 && i < 2) {
                    console.log(`'${answer}' is wrong answer ;(."Correct answer was 'no'.`);
                    console.log(`Let's try again, ${name}`);
                }
                break;
        }
}
console.log(`Congratulations, ${name}!`);
}

evenOdd();


