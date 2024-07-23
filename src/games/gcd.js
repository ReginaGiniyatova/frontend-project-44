import randomNumber from '../randomNumber.js';
import runManagment from '../index.js';

const gcd = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }

  return firstNumber + secondNumber;
};

const isGcdGame = () => {
  const a = randomNumber();
  const b = randomNumber();

  const question = `${a} ${b}`;
  const answer = gcd(a, b);

  return [question, `${answer}`];
};

export default function runGcdGame() {
  runManagment('Find the greatest common divisor of given numbers.', isGcdGame);
}
