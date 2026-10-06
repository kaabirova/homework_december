const characters = [
    'Гав-гав', 'Незнайка', 'Бармaлей', 'Леопольд', 'Хоттабыч'];

const incorrectWord = characters.find(function (item) {
    console.log(item.includes( 'a'));
});

console.log(incorrectWord);