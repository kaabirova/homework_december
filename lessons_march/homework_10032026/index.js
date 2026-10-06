function isLeapYear (num){

    if ((num %4 === 0) && (num %400 ===0)){
        console.log("високосный год")
    }else {
        console.log("не високосный год")

    }
}


isLeapYear(2000);
isLeapYear(2001);