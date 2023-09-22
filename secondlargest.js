function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "The array should have at least two numbers.";
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


const numbers = [11, 5, 25, 8, 20]; 
const secondLargest = findSecondLargest(numbers);
console.log('The second-largest number is:', secondLargest);
