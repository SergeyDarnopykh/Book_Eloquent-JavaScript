function makeBoard(size) {
    let board = '';

    for  (let i = 0, multiplicity = 0; i < size * size; i++) {
        if  (i % size == 0) {
            board += '\n';
            multiplicity = !multiplicity;
        }

        if  ((i & 1) == multiplicity) {
            board += '#';
        } else {
            board += ' ';
        }
    }

    return board;
}

console.log( makeBoard(8) );