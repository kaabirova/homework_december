
const may2022 = [26, 19, 13, 17, 20, 24, 12, 17, 21, 19, 20, 23, 26, 25, 24, 27, 26, 18, 20, 25, 31, 20, 22, 28, 30, 34, 31, 16, 27, 30, 24];
console.log('Май 2022');
printAverageTemp(may2022);
printMinAndMaxTemp(may2022);

const may2023 = [12, 12, 15, 17, 22, 25, 27, 29, 21, 24, 27, 21, 25, 13, 20, 23, 24, 12, 19, 23, 24, 26, 24, 25, 27, 22, 23, 23, 29, 33, 33];
console.log('\nМай 2023');
printAverageTemp(may2023);
printMinAndMaxTemp(may2023);

let arr = []
function printAverageTemp(arr) {
    let sum = 0
   arr.forEach(element => {
       sum += element;
   })
    let average = sum /(arr.length );
    console.log("Средняя температура:", average);
}

function printMinAndMaxTemp(arr) {
    let min = arr[0];
    let minDayIndex = 0;
    let maxDayIndex = 0;
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            maxDayIndex = i+1;
        }
    }
    console.log("Самая высокая температура в месяце была", maxDayIndex, "числа:",max);

    for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        minDayIndex = i+1;
    }
    }
    console.log("Самая низкая температура в месяце была", minDayIndex, "числа:",min);


}

