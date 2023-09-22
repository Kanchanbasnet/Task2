//Write a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    let sum = 0;
    for (const element of arr) {
      sum = sum + element;
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const total = sumArray(numbers);
  console.log(`The sum of array elements is: ${total}`);
  