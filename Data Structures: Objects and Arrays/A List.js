function arrayToList(array) {
    return {
        value: array.shift(),
        rest: (array.length) ? arrayToList(array) : null
    };
}

function listToArray(list) { 
    const array = [];

    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    
    return array;
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    };
}

function nth(list, position) {
    if (position === 0) {
        return list.value;
    }

    return (list.rest) ? nth(list.rest, --position) : undefined;
}