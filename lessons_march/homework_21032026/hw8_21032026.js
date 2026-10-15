const words =["book", "code", "plane", "java"];

let isValid = true;
let countVowels = 0;
let countConsonants = 0;
const vowels = ["a","e","u","i","o"];
let result = [];

for (let j = 0; j < words.length; j++) {
    for (let l = 0; l < words[j].length; l++) {
        countVowels = vowels.includes(words[j][l])
    }

}

isValid = countVowels === countConsonants;
if (isValid) {
    result.push(words[j]);
    console.log(result);

}