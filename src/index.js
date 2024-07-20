import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function runManagment(rules, roundOfGame) {
  const name = greeting();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = roundOfGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.
            Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
