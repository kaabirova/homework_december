function copy(obj) {
let objCopy = {...obj};
return objCopy;
}
const firstObj = {
    one: 1,
    two: 2,
    three: 3
};
const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log("1",firstObj); // { one: 1, two: 2, three: 3 }
console.log("2", secondObj); // { one: 1, two: 2, three: 3 }
console.log("3", thirdObj); // { one: 1, two: 2, three: 3 }

firstObj.four = 4;

console.log("1+4", firstObj); // { one: 1, two: 2, three: 3, four: 4 }
console.log("2+4", secondObj); // { one: 1, two: 2, three: 3, four: 4 }
// thirdObj не изменился
console.log(thirdObj); // { one: 1, two: 2, three: 3 }