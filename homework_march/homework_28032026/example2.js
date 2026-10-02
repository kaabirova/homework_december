function compare(firstObj, secondObj) {
if (firstObj === secondObj) {
    return true;
} else {
    return false
}

}
const first = {
    property: 'value'
};
const second = {
    property: 'value'
};
const third = second;
console.log(compare(first, second)); // false
console.log(compare(second, third)); // true