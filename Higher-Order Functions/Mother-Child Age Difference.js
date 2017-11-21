// Author's code
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
    ancestry.forEach(function(person) {
    byName[person.name] = person;
});

// My code
function hasMotherInfo (person) {
    return byName[person.mother];
}

function calculateAgeDifference(person) {
    return person.born - byName[person.mother].born;
}

console.log(average(ancestry.filter(hasMotherInfo).map(calculateAgeDifference)));
