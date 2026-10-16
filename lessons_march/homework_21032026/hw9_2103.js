
const words = ["abab", "aaaa", "abcabc", "xyz", "1212", "hellohello"]
let result = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let n = word.length;

    if(n%2 === 0){
        let m = n/2;
        let isEqual = true;
    for (let j = 0; j < m; j++) {
        if(word[j] !== word[j+m]){
            isEqual = false;
            break;
        }
    }
    if (isEqual){
            result.push(word);
            console.log(result);
        }
    }
}