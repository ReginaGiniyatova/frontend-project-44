import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const firstGame = () => {
    let countToWin = 3;
    const name = greeting();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (countToWin > 0) {
        let number = Math.floor(Math.random() * 101);
        console.log(`Question: ${number}`);
        let answer = handleUserAnswer();

        if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
            console.log('Correct!')
            countToWin -= 1;
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`)
            console.log(`Let's try again, ${name}!`)
            break;
        }
    }  
    if (countToWin === 0) {
        console.log(`Congratulations, ${name}!`)
    }
}

const handleUserAnswer = () => {
    return readlineSync.question('Your answer: ');
}

const isEven = (number) => {
    return number % 2 === 0;   
}

firstGame();
