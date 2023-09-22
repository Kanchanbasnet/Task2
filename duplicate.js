//Write a function that removes duplicate elements from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); 

