#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateNumber } from '../src/utils.js';

const progressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    const length = generateNumber(5, 10); // Длина прогрессии
    const step = generateNumber(1, 9); // Шаг прогрессии
    const firstNum = generateNumber(1, 10); // Первое число
    const hiddenPos = generateNumber(0, length - 1); // Позиция скрытого числа

    const progression = [];
    let correctAnswer;
    
    // Создаем прогрессию
    for (let i = 0; i < length; i++) {
        const currentNum = firstNum + step * i;
        if (i === hiddenPos) {
            progression.push('..');
            correctAnswer = currentNum;
        } else {
            progression.push(currentNum);
        }
    }

    console.log('Question:', progression.join(' '));
    const answer = readlineSync.question('Your answer:');

    if (Number(answer) === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        process.exit(1);
    }
};

// Запускаем 3 раунда игры
for (let i = 0; i < 3; i++) {
    progressionGame();
}

console.log(`Congratulations, ${name}!`);