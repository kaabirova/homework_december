
const students = {
    'Jack': [90, 78, 89, 80],
    'Bob': [88, 75, 79, 60],
    'Kate': [90, 90, 89],
}
// TODO: посчитать среднюю оценку для каждого студента
//  Jack: 84.25
//  Bob: ...
//  Kate: ...



let sumJack = 0;
let sumBob = 0;
let sumKate = 0;

let assignJack = Object.assign(students.Jack);
let assignBob = Object.assign(students.Bob);
let assignKate = Object.assign(students.Kate);


for (let i = 0; i < assignJack.length; i++) {
    sumJack += assignJack[i];
}
let totalJack = (sumJack / assignJack.length);
console.log("Jack:", totalJack);

for (let i = 0; i < assignBob.length; i++) {
    sumBob += assignBob[i];
}
let totalBob = (sumBob / assignBob.length);
console.log("Bob:", totalBob);

for (let i = 0; i < assignKate.length; i++) {
    sumKate += assignKate[i];
}
let totalKate = (sumKate / assignKate.length);
console.log("Kate:", totalKate);


