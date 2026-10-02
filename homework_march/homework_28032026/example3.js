function isEqual(firstObj, secondObj) {
    const firstKeys = Object.keys(firstObj);
    const secondKeys = Object.keys(secondObj);



    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    return firstKeys.every(x => firstObj[x] === secondObj[x]);
}
const first = {
    property: 'value',
    anotherProperty: 'another value'
};
const second = {
    property: 'value',
    anotherProperty: 'another value'
};
const third = {
    property: 'value',
    anotherProperty: 'one more value'
};

console.log(isEqual(first, second)); // true
console.log(isEqual(second, third)); // false