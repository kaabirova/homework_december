

function swap (obj){

    const res = {};
Object.keys(obj).forEach(key => {
const value = obj[key];
console.log("V",value)
res[value] = key;
})
    console.log("res",res);

    return res;
}



const myObj = {
    first: 1,
    second: 2,
    third:3
}

console.log("myObj",myObj);
console.log(swap(myObj));