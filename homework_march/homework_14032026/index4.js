





function sumArray(arr) {
let arrResult = [];

if (arr === null || arr === undefined || arr.length === 0){
    return 0

}
for (let i = 0; i < arr.length; i++) {

    if (!arrResult.includes(arr[i])){
        arrResult.push(arr[i]);
    }
    }
return arrResult;
}



sumArray(null);                     // 0
// sumArray([ ]);                     //0
// sumArray([ 3 ]);                   //0
// sumArray([ 3, 5 ]);                // 0
// sumArray([ 6, 2, 1, 8, 10 ]);      // 16
// sumArray([ 0, 1, 6, 10, 10 ]);      //17
// sumArray([ -6, -20, -1, -10, -12 ]); /// -28
// sumArray([ -6, 20, -1, 10, -12 ]); //3