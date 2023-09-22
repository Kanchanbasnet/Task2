function powerIterative(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
const base = 5;
const exponent = 3;
const result = powerIterative(base, exponent);
console.log(`${base}^${exponent} = ${result}`); 
