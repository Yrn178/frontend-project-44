import readlineSync from 'readline-sync';
import {readlineSyncQuestion, generateNumber} from "../src/cli.js";

const progression = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');
        const progressioin = []
        const long = generateNumber(5, 10);
        const step = generateNumber(1, 9);
        const number = generateNumber(1, 10);
        for (let i = 0; i < long; i++) {
            if (i === number) {
                progressioin.push('..');
                const reply = step
            }
            else{
                progressioin.push(step);
            }
            step = step + step;
        }
        console.log(progressioin);
        const answer = readlineSync.question('Your answer:');
        switch (answer) {
            case reply:
                console.log("Correct!");
                break;
            default:
                break;
        }
}

progression()