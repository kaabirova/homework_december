// дан массив чисел
const integersToCheck = [2, 3, 193, 79, 7, 29];

/* нужно дополнить функцию isPrime, принимающую число на вход
и возвращающую true, если число простое, а иначе false */

function isPrime(num) {
    const divisors = [];
    for (let i = 2; i <= num; i++) {
divisors.push(i);
    }

    return divisors.every(i => num % i !==0)
}




