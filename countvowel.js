//Write a function that counts the number of vowels in a given string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    for (const char of str) {
    if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  return vowelCount;
  }
  const input = "Kanchan";
  const numberOfVowels = countVowels(input);
  console.log(`The number of vowels is: ${numberOfVowels}`);
  