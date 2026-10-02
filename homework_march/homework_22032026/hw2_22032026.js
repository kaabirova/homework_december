
const storage1 = {
    'FRUIT': 500,
    'VEGETABLE': 200,
    'MEAT': 20,
}

const storage2 = {
    'DAIRY': 670,
    'VEGETABLE': 100,
    'FRUIT': 250,
}
// TODO: объединить два объекта и получить один общий объект
//  Ожидаемый результат:
//  {
//      'FRUIT': 750,
//      'VEGETABLE': 300,
//      'MEAT': 20,
//      'DAIRY': 670,
//  }

let sum = {...storage1};


Object.keys(storage2).forEach(key => {
   if (sum[key]){
       sum[key] += storage2[key];
   }else{
       sum[key] = storage2[key];
   }
    }
)

console.log(sum);