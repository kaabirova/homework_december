function isPrime(num){

    if ((num %2 ===0 ) || (num %3 ===0 ) || (num %5 ===0 )){
        console.log("не простое число")

    }else{
        console.log("простое число")
    }


}

isPrime(13);
isPrime(12);