// Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after it.

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