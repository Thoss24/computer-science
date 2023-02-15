function recursiveFib(n) {
    return n === 1 ? [0] : n === 2 ? [0, 1] : [...recursiveFib(n - 1), recursiveFib(n - 1)[n - 2] + recursiveFib(n - 2)[n - 3]]
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

console.log(recursiveFib(8))
console.log(fib(11))