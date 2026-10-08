const words =["book", "code", "plane", "java"];

let isValid = true;
let countVowels = 0;
let countConsonants = 0;
const vowels = ["a","e","u","i","o"];
let result = [];


for (let j = 0; j < words.length; j++) {
    for (let l = 0; l < words[j].length; l++) {
        for (let k = 0; k < vowels.length; k++) {
            if (words[j][l] === vowels[k]) {
                countVowels++;
            } else if (!(words[j][l] === vowels[k])) {
                countConsonants++;
            }
        }
        if (!(countVowels === countConsonants)) {
            isValid = false;
            break
        }
        if (countVowels === countConsonants) {
            isValid = true;
            result.push(words[j][l]);
        }
        // if (isValid === true) {
        //     console.log(result);
        // }
    }
}

// let word
// function wordGen(words) {
//     for (let i = 0; i < words.length; i++) {
//         word = words[i];
//         console.log(word);
//     }
//     return word
// }
//
// wordGen(words);