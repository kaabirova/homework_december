const digits = [321, 122, 157, 98];

let result = [];

digits.forEach(digit => {
const stringNum = String(digit);

    let correct = true;

    for (let i = 0; i < stringNum; i++) {
        for (let j = i+1; j < stringNum; j++) {
            if (stringNum[i] >= stringNum[j]){
                correct = false;
                break
            }
        }
    }
    if(correct === true){
        result.push(stringNum)
    }
    console.log(result);
    return result;
})