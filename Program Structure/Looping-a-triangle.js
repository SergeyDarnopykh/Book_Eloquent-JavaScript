function printSharp (sharpsQty) {
    let sharps = '';

    for (let i = 0; i < sharpsQty; i++) {
        sharps += '#';
    }

    console.log(sharps);
}

for  (let i = 0; i < 7; i++) {
    printSharp( i + 1 );
}