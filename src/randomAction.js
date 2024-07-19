export default function getRandomAction() {
    const arr = ['+', '-', '*'];
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    return randomItem;
   };