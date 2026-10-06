const arr = ["level", "abca", "radar"];



arr.forEach(word => {

    if (isPalindrome(word) === true) {
        console.log("true")
        return true
    }
    for (let i = 0; i < word.length; i++) {
        let str = (word.slice(0, i) + word.slice(i+1))

        if (isPalindrome(str) === true){
           console.log("true")
            return true

        }
    }
    return false;

})

function isPalindrome(word){
    let palindrome =true;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length-1-i]) {
            palindrome = false;
            break;
        }
    }

    if( palindrome === true ){
        return true
    }

}