const michaelJacksonAlbums = [
    1972, // Got to Be There
    1972, // Ben
    1973, // Music & Me
    1975, // Forever, Michael
    1979, // Off the Wall
    1982, // Thriller
    1987, // Bad
    1991, // Dangerous
    1995, // HIStory: Past, Present and Future, Book I
    2001  // Invincible
];

const filteredNums = michaelJacksonAlbums.filter(x => 1979 < x && x < 1990);
console.log(filteredNums)