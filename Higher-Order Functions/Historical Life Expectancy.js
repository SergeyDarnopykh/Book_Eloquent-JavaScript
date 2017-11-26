// Author's code
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

// My code
function calculateCentury(person) {
    return Math.ceil(person.died / 100);
}

function calculateAge(person) {
    return person.died - person.born;
}

function groupBy(array, computeGroup) {    
    // Keys : centuries 
    // Data: arrays of age
    const group = {};

    array.forEach( (person) => {
        const key = computeGroup(person);

        if (!group[key]) {
            group[key] = [];
        }

        group[key].push(person);
    } );

    return group;
}

function calculateAverage(object) {
    for (key in object) {
        const ages = object[key]. map(calculateAge);
        object[key] = average(ages);
    }
}

function showObject(object) {
    for (key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

const peopleAgeByCentury = groupBy(ancestry, calculateCentury);
calculateAverage(peopleAgeByCentury)
showObject(peopleAgeByCentury);
