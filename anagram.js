//Write a function that checks if two strings are anagrams of each other (contain the same letters, ignoring spaces and capitalization).
function areAnagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
if (n1 !== n2)
        return false;
const arr1 = Array.from(str1);
    const arr2 = Array.from(str2);
      arr1.sort();
      arr2.sort();

    for (let i = 0; i < n1; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

let str1 = "listen";
let str2 = "silent";

if (areAnagram(str1, str2))
    console.log("The two strings are anagrams of each other.");
else
    console.log("The two strings are not anagrams of each other.");
