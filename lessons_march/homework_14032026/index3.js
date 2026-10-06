const array = [1,2,3,4,5];


function getReversedArr(array) {
   let reversedArr = [];
    for (let i = array.length-1; i >= 0; i--) {
        reversedArr.push(array[i]);
    }
    return reversedArr;

}


const reversedArr = getReversedArr(array);

console.log(reversedArr); // [5,4,3,2,1]