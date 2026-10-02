
const students = {
    'Jack': [90, 78, 89, 80],
    'Bob': [88, 75, 79, 60],
    'Kate': [90, 90, 89],
}
// TODO: посчитать среднюю оценку для каждого студента
//  Jack: 84.25
//  Bob: ...
//  Kate: ...


let sum = 0;
let a = 0;
let b = 0;
let arr = []

let keys = Object.keys(students);

for (let i = 0; i < 3; i++) {
    arr = [...keys[i]];
    console.log(arr);
}

students.Jack.forEach(element => {
   a +=  element
    console.log(a)
    return a
})
    b = (a / arr.length)
    console.log(Object.keys(students[1]), b)



