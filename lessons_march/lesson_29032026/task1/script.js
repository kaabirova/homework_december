const products = [
    {name: 'Apple', price: 1290, type: 'FRUIT'},
    {name: 'Pear', price: 3200, type: 'FRUIT'},
    {name: 'Banana', price: 1590, type: 'FRUIT'},
    {name: 'Orange', price: 2100, type: 'FRUIT'},
    {name: 'Cucumber', price: 900, type: 'VEGETABLE'},
    {name: 'Tomato', price: 1450, type: 'VEGETABLE'},
    {name: 'Carrot', price: 780, type: 'VEGETABLE'},
    {name: 'Potato', price: 600, type: 'VEGETABLE'},
    {name: 'Onion', price: 520, type: 'VEGETABLE'},
    {name: 'Grapes', price: 2700, type: 'FRUIT'},
    {name: 'Strawberry', price: 3900, type: 'FRUIT'},
    {name: 'Watermelon', price: 2500, type: 'FRUIT'},
    {name: 'Broccoli', price: 1850, type: 'VEGETABLE'},
    {name: 'Pineapple', price: 4300, type: 'FRUIT'},
    {name: 'Mango', price: 5200, type: 'FRUIT'},
    {name: 'Avocado', price: 4700, type: 'FRUIT'},
    {name: 'Garlic', price: 1350, type: 'VEGETABLE'},
    {name: 'Lemon', price: 1950, type: 'FRUIT'},
    {name: 'Spinach', price: 1100, type: 'VEGETABLE'},
    {name: 'Beef', price: 7500, type: 'MEAT'},
    {name: 'Chicken Breast', price: 4600, type: 'MEAT'},
    {name: 'Lamb', price: 8900, type: 'MEAT'},
    {name: 'Sausage', price: 4200, type: 'MEAT'},
    {name: 'Milk', price: 720, type: 'DAIRY'},
    {name: 'Cheese', price: 3700, type: 'DAIRY'},
    {name: 'Butter', price: 2150, type: 'DAIRY'},
    {name: 'Yogurt', price: 950, type: 'DAIRY'},
    {name: 'Cream', price: 1250, type: 'DAIRY'}
];

// 1. создать массив из названия товаров [Apple, Pear, ...]

// 2. создать массив из типов товаров без дубликатов [FRUIT, VEGETABLE, MEAT, DAIRY]

// 3. распечатать сумму всех товаров

products.forEach(nameProduct => {
    console.log(nameProduct.name);
})

let sum = 0;
products.forEach(price => {
    sum += price.price;
})
console.log(sum);


let arrType = []

Object.values(products).forEach(item => {
    arrType.push(item.type);
})
let uniqueTypes = [];

for (let i=0; i<arrType.length; i++) {
    if (!uniqueTypes.includes(arrType[i]) ) {
        uniqueTypes.push(arrType[i]);
    }
}

console.log(arrType)

let countFruit = 0;
let countVegetable = 0;
let countMeat = 0;
let countDairy = 0;


for (let i=0; i< arrType.length; i++) {
    if (arrType[i] ==='FRUIT') {
        countFruit++
    }else if (arrType[i] ==='VEGETABLE') {
        countVegetable++
    }else if (arrType[i] ==='MEAT') {
        countMeat++
    }else if (arrType[i] ==='DAIRY') {
        countDairy++
    }
}
let max = Math.max(countFruit, countVegetable, countMeat,  countDairy);

console.log(uniqueTypes);
console.log(max)



