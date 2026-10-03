const words = ["lamp", "hello", "cat", "abba", "sun"];



let arrLamp = [...words[0]];
let arrHello = [...words[1]];
let wordLamp = ""
let wordHello = ""

for (let i = 0; i < arrLamp.length; i++) {
   wordLamp += arrLamp[i]
        if (wordLamp[i] === arrLamp[i+1]){
            break
        }
}
console.log(wordLamp);

for (let i = 0; i < arrHello.length; i++) {
    wordHello += arrHello[i]
    if (wordHello[i] === arrHello[i+1]){
        wordHello = ""
    }
}

console.log(wordHello);

let arrAbba = [...words[3]];
let wordAbba = ""

for (let i = 0; i < arrAbba.length; i++) {
    wordAbba += arrAbba[i]
    if (wordAbba[i] === arrAbba[i+1]){
        wordAbba = ""
    }
}

console.log(wordAbba);