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


