const arr = [1, 5, 2, 5, 3, 8, 4];

for (let i = 1 ; i+1 < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
        continue
    }
    if (arr[i] <= arr[i - 1]) {
        continue
    }
    let isValid = true;

    for (let j = 0; j < arr.length; j++) {
         if (i === j) {
            continue
         }
         if (arr[i] === arr[j] ) {
             isValid = false;
             break
         }
    }

    if (isValid) {
        console.log(arr[i])
    }
}