const digits =[2, 4, 7, 11, 5];

for( let i = 0; i < digits.length; i++){
    let digit = digits[i];
    for( let j = 0; j < digits.length; j++){
        let isEqual = false;
        console.log(digit)
        if (digit.includes(digits[j] + digits[j + 1])){
        isEqual = true
        }
    }
    if(isEqual){
        console.log(digit)
    }
}
