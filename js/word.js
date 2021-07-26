$(document).ready(function () {
    textAuto();
});
const startInsert = function (word, wordSpace) {
    return new Promise((resolve, reject) => {
        let tempWords = "";
        let isNext = false;
        let time = 200;
        var words = $(`#${wordSpace}`);
        setInterval(async () => {
            if (word.length === 0) {
                tempWords = word.substring(0, tempWords.length + 1);
            } else if (tempWords.length === word.length && isNext === false) {
                return
            } else {
                time = 200;
                tempWords = word.substring(0, tempWords.length + 1);
            }
            await  words.html(tempWords);
        }, time);
    })

}
const textAuto = function () {
    let textContent = ["Loading.....", "....", "...", "..", "."]
    for (word of textContent) {
        let pElement = document.createElement('p');
        let brElement = document.createElement('br');
        let wordSpace = `word${word.length}`
        var currentElement = document.getElementById("spanGroup");
        pElement.setAttribute("class", "words-default")
        pElement.setAttribute("id", wordSpace)
        pElement.href = './css/word.css';
        pElement.rel = 'stylesheet';
        pElement.type = 'text/css';
        currentElement.appendChild(pElement);
        currentElement.appendChild(brElement);
        startInsert(word, wordSpace)
    }
};