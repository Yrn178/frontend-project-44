#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateNumber } from "../src/cli.js";

const progressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    // Генерируем прогрессию
    const length = generateNumber(5, 10);
    const step = generateNumber(1, 9);
    const start = generateNumber(1, 10);
    const hiddenIndex = generateNumber(0, length - 1);
    
    let progression = [];
    let correctAnswer;
    
    for (let i = 0; i < length; i++) {
        const current = start + i * step;
        if (i === hiddenIndex) {
            progression.push('..');
            correctAnswer = current.toString();
        } else {
            progression.push(current);
        }
    }

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
    }
}

progressionGame();