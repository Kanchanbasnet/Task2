function generateFibonacci(n) {
    const f = [0, 1]; 

    
    while (f.length < n) {
        const nextFibonacci = f[f.length - 1] + f[f.length - 2];
        f.push(nextFibonacci);
    }

    return f;
}


const numberOfTerms = 5; 
const fibonacciSeries = generateFibonacci(numberOfTerms);
console.log(fibonacciSeries);
