function countBs(str) {
    return coutChar(str, 'B');
}

function countChar(str, char) {
    charCounter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            charCounter++;
        }
    }

    return charCounter;
}