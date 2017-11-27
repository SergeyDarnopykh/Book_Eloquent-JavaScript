// Historical life expectancy

// When we looked up all the people in our data set that lived more than 90 years, 
// only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

// Compute and output the average age of the people in the ancestry data set per century.
//  A person is assigned to a century by taking their year of death, 
//  dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

// For bonus points, write a function groupBy that abstracts the grouping operation.
//  It should accept as arguments an array and a function that computes the group for an element in the array
//   and returns an object that maps group names to arrays of group members.

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
    const newObj = {};

    for (key in object) {
        const ages = object[key]. map(calculateAge);
        newObj[key] = average(ages);
    }

    return newObj;
}

function showObject(object) {
    for (key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

const peopleAgeByCentury = groupBy(ancestry, calculateCentury);
showObject(calculateAverage(peopleAgeByCentury));
