// const words =[ "book", "code","plane",  "java"];
const words =[ "book"];

const vowels = ["a","e","u","i","o"];
let result = [];



for (let i = 0; i < words.length; i++) {
    // let word = words[i];
    let countVowels = 0;
    let countConsonants = 0;

    for (let j = 0; j < words[i].length; j++) {
        // let c = word[j];
        let isVowel = false;
        for (let k = 0; k < vowels.length; k++) {
           if( vowels[k].includes(words[i][j])){
               countVowels++;
               isVowel = true;
           }else {
               isVowel = false;
           }
        }
        //
        // let isVowel =
        // (c == 'a' || c == 'e' || c == 'u' || c == 'i' || c == 'o');

        if(isVowel === false){
            countConsonants++;
        }
        console.log(countVowels, countConsonants);

        }
    if (countVowels === countConsonants) {
            result.push(words[i]);
            console.log(result)
    }
}