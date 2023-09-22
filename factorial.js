//Write a function to calculate the factorial of a given positive integer.
function factorial(n){
    let fact = 1;

    for(let i = 1; i<=n; i++){
        fact = fact * i;
    }
    return fact;

}
 const n = 8;
 const fact = factorial(n);
 console.log(`The Factorial of ${n} is ${fact}`);

