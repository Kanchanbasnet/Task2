function missingNumber(arr) {
    const n = arr.length;
    const totalSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    return totalSum - actualSum;
}


const array = [0, 1, 3, 4, 5, 6, 7, 8, 9];
const result = missingNumber(array);
console.log(`The missing number in [${array}] is ${result}.`);

