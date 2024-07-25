import randomNumber from '../randomNumber.js';
import runManagment from '../index.js';

const isPrime = (number) => {
    for (let i = 2; i * i <= number; i += 1) {
        if (number % i === 0) {
            return false
        }
    }
    return number > 1;
};

const isPrimeGame = () => {
  const question = randomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default function runPrimeGame() {
  runManagment('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeGame);
}
