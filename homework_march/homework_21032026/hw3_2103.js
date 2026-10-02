
const numbers = [ 2, 10, 3,  4, 20, 1];


const bigNumber =
    numbers.find ((num, i, arr ) => {

if (i === 0 || i === arr.length-1) return false;

return (arr[i-1]+ arr[i+1]) < num;

    });

console.log( bigNumber);