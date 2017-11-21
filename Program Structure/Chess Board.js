function makeBoard(width, height) {
    let board = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if ((i + j) & 1) {
                board += ' ';
            } else {
                board += '#';
            }

            if (j == width - 1) {
                board += '\n';
            }
        }
    }

    return board;
}

console.log( makeBoard(3, 5) );