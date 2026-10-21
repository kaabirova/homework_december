

function findNumber(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if ((/^\d+$/.test(numbers[i]))) {
            result.push(numbers[i]);
            // console.log(result);
        }
    }
    return(isEqual(isPalindrome(result)))
}

function isPalindrome(arr) {
    let result2 = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];

        let reversed = str.split('').reverse().join('');

        if (str === reversed) {
            result2.push(Number(str));
        }
    }

    return result2;
}

function isEqual(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100){
            return arr[i];
        }
    }

}
const numbers1 = [ "123", "404", "111", "cat", "808", "90","7007" ];
console.log(findNumber(numbers1));


