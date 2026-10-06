


function transformArray(numbers, callback){
    let result = []
    for(let i=0; i<numbers.length; i++){
            result.push(callback(numbers[i]));

    }
    return result
}


const numbers = [1,2,3,4,5,6];
const doubled = transformArray(numbers, x => x * 2);
const squared = transformArray(numbers, x => x * x);
const asStrings = transformArray(numbers, x => "Number:" + x);


console.log(doubled)
console.log(squared)
console.log(asStrings)


///.forEach

const nums = [1,2,3,4,5,6];

///Императивный подход

for (let i=0; i< nums.length; i++){
    console.log(nums[i]);
}

/// Декларативный подход
nums.forEach(x => console.log(x))



///.map - преобразование элементов

const doubled = nums.map(x => x * 2 );
console.log(doubled)

///.filter - фильтрация элементов

const filteredNums = nums.filter(x => x%2 === 0);
console.log(filteredNums)

///.some - важно чтобы минимум один элемент подходил под условие
///.some - проверяет, есть ли в массиве хотя бы один элемент, который соответствует опредю правилу
///колбэк с этим правилом проверяет каждый элемент и возвращает true / false


const hasEvenNumber = nums.some(x => x%2 === 0);
console.log(hasEvenNumber) ///true

//.every - важно чтобы все элементы подходили под условие

const allEvenNumbers = nums.every(x => x%2 === 0);
console.log(allEvenNumbers) ///false

//.find - возвращает первый элемент подходящий под условие
const nums = [ 1, 3, 5, 8, 10, 3]
const evenNum = nums.find(x => x % 2 ===0 );
console.log(evenNum) ///8

//.reduce

//.includes
 const str = 'hello';

console.log(str.includes('h'));//true
console.log(str.includes('z'));//false
