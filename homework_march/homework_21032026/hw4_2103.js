const words = ["lamp", "hello", "cat", "abba", "sun"];
const result = [];


words.forEach(word => {
    let isUnique = true;

    for (let i = 0; i < word.length; i++) {
      for (let j = i+1; j < word.length; j++) {

          if (word[i] === word[j]) {
              isUnique = false;
              break
          }
      }
    }
    if (isUnique === true) {
        result.push(word);
    }


console.log(result);
  return result
})

