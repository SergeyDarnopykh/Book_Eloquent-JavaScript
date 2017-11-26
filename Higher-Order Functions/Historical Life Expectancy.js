// Author's code
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

// My code


groupBy(array, test) {
    array.forEach( (item) => {
        if (test(item))
    } );
}