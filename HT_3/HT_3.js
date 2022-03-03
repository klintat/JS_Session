function palindromeEvt() {
    const textValue = prompt("Enter the text you want to check for pailindrome.").toLowerCase();
    alert("Text is palindrome: " + palindrome(textValue));
}

function palindrome(textValue) {
    let textOtherWay = "";
    for (let i = 0; i <= textValue.length; i++) {
        textOtherWay += textValue[textValue.length - i];
    }
    return textOtherWay === textValue;
}

function anagramEvt() {
    const textValue = prompt("Enter the text you want to make an anagram of.").toLowerCase();
    alert("Your anagram is: " + anagram(textValue));
}

function anagram(textValue) {
    let emptyWord = "";
    for (let i = 0; i < textValue.length; i++) {
        emptyWord += ".";
    }

    emptyWord = emptyWord.split("");
    textValue = textValue.split("");

    let randomNumber;
    for (let i = 0; i < textValue.length; i++) {
        do {
            randomNumber = Math.floor(Math.random() * textValue.length);
        } while (emptyWord[randomNumber] !== ".")
        emptyWord[randomNumber] = textValue[i];
        textValue[i] = ".";
    }

    let newWord = "";
    for (let i = 0; i < textValue.length; i++) {
        newWord += emptyWord[i];
    }
    return newWord;
}

function wordCountEvt() {
    const textValue = prompt("Enter the text you want to check for word count.");
    alert("Text contains " + wordCount(textValue) + " words.");
}

function wordCount(textValue) {
    let wordCount;
    if (textValue.length === 0) {
        wordCount = 0;
    } else {
        wordCount = 1;
    }
    for (let i = 0; i < textValue.length; i++) {
        if (textValue[i] === " ") {
            wordCount++;
        }
    }
    return wordCount;
}

function letterOccurenceEvt() {
    const textValue = prompt("Enter the text you want to check for maximum letter occurences.").toLowerCase();
    let result = letterOccurence(textValue);
    alert("Letter " + result.letter + " occured in the text " + result.amount + " times.");
}

function letterOccurence(textValue) {
    let letterMap = {};
    for (let i = 0; i < textValue.length; i++) {
        if (!letterMap[textValue[i]]) {
            letterMap[textValue[i]] = 1;
        } else {
            letterMap[textValue[i]]++;
        }
    }

    let result = {
        letter: "",
        amount: 0
    };
    for (var key in letterMap) {
        if (letterMap[key] > result.amount) {
            result.letter = key;
            result.amount = letterMap[key];
        }
    }
    return result;
}