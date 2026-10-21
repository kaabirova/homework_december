
function sameLetter(words){
for (let i = 0; i < words.length-1; i++) {
    const firstLetterCurrent = words[i][0].toLowerCase();
    const firstLetterNext = words[i + 1][0].toLowerCase();

    if (firstLetterCurrent === firstLetterNext) {
        return false;
    }
}
return true;
}

// Примеры использования:
const words1 = ["cat", "dog", "sun", "apple"];
console.log(sameLetter(words1)); // true (все соседние начинаются с разных букв)

const words2 = ["cat", "dog", "sun", "snake", "apple"];
console.log(sameLetter(words2));