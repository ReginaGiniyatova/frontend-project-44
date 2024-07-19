import randomNumber from '../randomNumber.js';
import runManagment from '../index.js';
import randomAction from '../randomAction.js';

const isCalcGame = () => {
    let a = randomNumber();
    let b = randomNumber();
    let action = randomAction();
    const question = `${a} ${action} ${b}`
    const answer = isCalced(a, b, action);
    return [question, `${answer}`];
}

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
 
export default function runCalcGame() {
    runManagment('What is the result of the expression?', isCalcGame) 
}; 




