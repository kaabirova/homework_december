


function removeDuplicates(arr) {
    let arrResult = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arrResult.includes(arr[i])) {
            arrResult.push(arr[i]);
        }
    }
    return arrResult;
}





   const numbers = [6, 5, 5, 4, 1, 4, 3, 5];
const result = removeDuplicates(numbers);
    console.log(result); // [6, 5, 4, 1, 3]