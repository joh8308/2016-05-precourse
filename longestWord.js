"use strict"

function longestWord(str) {
    var str = str.split(" ");
    var longest = 0;
    var word = null;
    for (let i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return console.log(word);
}

longestWord("I love codestates")
