function range(start, end, _step) {
    const array = [],
          step = _step || 1;

    for (let i = start; (start < end) ? (i <= end) : (i >= end); i += step) {
        array.push(i);    
    }

    return array;
}

function sum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}
