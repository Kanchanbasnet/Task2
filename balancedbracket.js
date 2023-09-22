function balancedBracket(expression) {
    const stack = [];
    const bracketMap = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (let char of expression) {
      if (bracketMap[char]) {
        stack.push(char);
      } else {
        const topOfStack = stack.pop();
        if (!topOfStack || bracketMap[topOfStack] !== char) {
          return false; 
        }
      }
    }
    return stack.length === 0;
  }
  let expression = "([{}])";
  let expression2 = "[(){}]";
 

if (balancedBracket(expression))
    console.log("Balanced ");
else
    console.log("Not Balanced ");

if (balancedBracket(expression2))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
  
  