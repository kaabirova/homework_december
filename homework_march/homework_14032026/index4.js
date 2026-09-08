
function sumArray(array) {
    if (array === null || array === undefined || array.length === 0 || array.length === 1 ){
        return 0
    }
    if (typeof array !== 'object' || array.length === undefined) {
        return 0;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }


    let max = array[0];
    for (let j = 0; j < array.length; j++) {
        if (max < array[j]) {
            max = array[j]
        }
    }

    let sum = 0;
    array.forEach((element) => {
        sum += element;
    })
    let summa = sum - (min + max);

    console.log(summa);

    return summa


}


sumArray(null) ;
sumArray([ ]);
 sumArray([ 3 ]);
sumArray([ 3, 5 ]);
 sumArray([ 6, 2, 1, 8, 10 ]);
 sumArray([ 0, 1, 6, 10, 10 ]);
sumArray([ -6, -20, -1, -10, -12 ]);
sumArray([ -6, 20, -1, 10, -12 ]);