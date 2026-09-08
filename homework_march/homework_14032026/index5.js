



function paperwork(m, n) {
    let a = 0;
    if (m <= 0 || n <= 0){
       return 0
    } else if (m > 0 && n > 0){
        a = (m * n)
       return a
    }

}




console.log("1")
paperwork(5,5);
console.log("2")
paperwork(5,-5);
console.log("3")
paperwork(-5,-5);
console.log("4")
paperwork(-5,5);
console.log("5")
paperwork(5,0);