import randomNumber from '../randomNumber.js';
import runManagment from '../index.js';

const isEven = (number) => number % 2 === 0;

const isEvenGame = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default function runEvenGame() {
  runManagment('Answer "yes" if the number is even, otherwise answer "no".', isEvenGame);
}
