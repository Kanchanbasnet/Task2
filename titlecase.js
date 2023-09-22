//Create a function that converts a sentence to title case (capitalize the first letter of each word).
function titleCase(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join(' ');
}
const inputSentence = "hello i am kanchan basnet";
const titleCasedSentence = titleCase(inputSentence);
console.log(titleCasedSentence); 
