//Write a function to reverse a given string without using the built-in reverse() method.

function reverseString(input){
    let reversedString = '';
    for(let i = input.length-1; i>=0;i--){
        reversedString = reversedString + input.charAt(i);

    }
    return reversedString;
}

const originalString = "Kanchan";
const reversed = reverseString(originalString);
console.log(reversed);