import readlineSync from 'readline-sync';
import {readlineSyncQuestion, generateNumber} from "../src/cli.js";

const getGCD = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i++) {
        const randomNum = generateNumber(1, 30);
        const randomNum2 = generateNumber(1, 30);
        console.log("Question:", randomNum, randomNum2);
        const answer = readlineSync.question('Your answer:');
        var minNum = Math.min(randomNum, randomNum2);
        let gcd = 0;        
        for (let j = minNum; j > 0; j--) {
            if (randomNum % j == 0 && randomNum2 % j == 0) {
                gcd = j;
                break;
            }
        }        
        switch (Number(answer)) {
            case gcd:
                console.log("Correct!");
                break;
            default:
                console.log(`'${answer}' is wrong answer ;(."Correct answer was '${gcd}'.`);
                console.log(`Let's try again, ${name}`);
                break;
    }
    }
    console.log(`Congratulations, ${name}!`);
}

getGCD();
