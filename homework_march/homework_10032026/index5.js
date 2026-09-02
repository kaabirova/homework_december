
const radiohead = [1993, 1995, 1997, 2000, 2001, 2003, 2007, 2011, 2016];
const kendrickLamar = [2011, 2012, 2015, 2016, 2017, 2022, 2024];
const bjork = [1977, 1990, 1993, 1995, 1997, 2001, 2004, 2007, 2011, 2015, 2017, 2022];


function printPeriodWithoutAlbum(arr) {
    let arrPeriod = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let period = arr[i];
        let period2 = arr[i - 1];
        if (i === 0) {
            break
        }
        let period3 = period - period2;
        arrPeriod.push(period3);
        // console.log(period3);
        // console.log(arrPeriod);
    }
    let periodWithout = arrPeriod[0];

    for (let j = 1; j < arrPeriod.length; j++) {
        if (periodWithout < arrPeriod[j]) {
            periodWithout = arrPeriod[j];
        }
    }
    console.log(periodWithout);

}

printPeriodWithoutAlbum (radiohead);
printPeriodWithoutAlbum(kendrickLamar);
printPeriodWithoutAlbum(bjork);