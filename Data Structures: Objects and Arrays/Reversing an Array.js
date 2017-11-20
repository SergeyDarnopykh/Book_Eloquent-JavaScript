function reverseArray(array) {
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}