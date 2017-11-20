function deepEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' ||
        typeof obj2 !== 'object') {
            return obj1 === obj2; 
        }
    
    for (prop in obj1) { 
        if ( (obj1[prop] === obj2[prop]) ||
            ( (obj1[prop] !== null) && (typeof obj1[prop] === 'object') && deepEqual(obj1[prop], obj2[prop]) ) ) {
            continue;
        }

        return false;
    }

    return true;
}