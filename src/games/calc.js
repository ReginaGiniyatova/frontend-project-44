import randomNumber from '../randomNumber.js';
import runManagment from '../index.js';

const isCalced = (a, b, action) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const randomAction = () => {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
};

const isCalcGame = () => {
  const a = randomNumber();
  const b = randomNumber();
  const action = randomAction();
  const question = `${a} ${action} ${b}`;
  const answer = isCalced(a, b, action);
  return [question, `${answer}`];
};

export default function runCalcGame() {
  runManagment('What is the result of the expression?', isCalcGame);
}
