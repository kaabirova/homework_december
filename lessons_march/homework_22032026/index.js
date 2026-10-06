const building = {
    floors :5,
    hasElevator: false,
    type: "кирпичный",
    architect : {
        name: "Флекс Тейлор",
        homeTown:  "Спрингфилд",
        yearOfBirth: 1904

    }
}


// for (let friend in building){
//     console.log(friend, "lives ", building[friend]);
//
// }
/// console.log(obj.key) - обращение к свойству key
/// console.log(obj[key]) - обращение к свойству one

const obj = {
  a:10,
    b:3,
    c:7,
    d:20,
    }
let sum = 0

    for (let key in obj){
       sum += obj[key];
    }

   // console.log(sum); /// 40


function removeUndefinedValues(obj) {
    // ...
}


const user = {
    name: 'Jack',
    city: undefined,
    email: undefined,
    createdAt: '2023-12-12T14:30',
    gender: 'M'
}



let removedObj = {};
for (let key in user){

    if (user[key] !== undefined){
        removedObj[key] = user[key]
    }

}

console.log(removedObj);


// Object.keys(obj) - Только ключи
// Object.values(obj) -Только значения
// Object.entries(obj) - Пары [ключ, значение]
// Object.fromEntries(arr) - Обратно из пар в объект
//
///reduce - "сворачивает" (сокращает) массив к одному единственному значению
// (это может быть число, строка, объект или даже новый массив)
// Сумма чисел -arr.reduce((acc, n) => acc + n, 0)
// Поиск Max / Min  -arr.reduce((acc, n) => n > acc ? n : acc, arr[0])
// Группировка / Подсчет - arr.reduce((acc, x) => { acc[x] = (acc[x] || 0) + 1; return acc; }, {})
// Трансформация объекта - Object.entries(obj).reduce((acc, [k, v]) => { ...; return acc; }, {})
