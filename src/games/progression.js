import randomNumber from '../randomNumber.js';
import runManagment from '../index.js';

const isProgression = (start, step, index) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(start + i * step);
  }
  const answer = arr[index];
  arr[index] = '..';
  return [arr.join(' '), String(answer)];
};

const isProgressionGame = () => {
  const startNumber = randomNumber();
  const stepNumber = randomNumber(1, 10);
  const hiddenNumber = randomNumber(0, 9);

  const [question, answer] = isProgression(startNumber, stepNumber, hiddenNumber);

  return [question, answer];
};

export default function runProgressionGame() {
  runManagment('What number is missing in the progression?', isProgressionGame);
}
