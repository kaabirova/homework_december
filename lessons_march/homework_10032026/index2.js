function displayDaysInMonth(num){
    if (num >= 13){
      console.log("Неккоректный номер месяца")
    } else if (num === 1){
        console.log("В месяце январь 31 день")
    }else if(num === 2){
        console.log("В месяце февраль 28 либо 29 дней")
    }else if(num === 4){
        console.log("В месяце апрельь 30 дней")
    }
}


displayDaysInMonth(1);
displayDaysInMonth(2);
displayDaysInMonth(4);
displayDaysInMonth(14);