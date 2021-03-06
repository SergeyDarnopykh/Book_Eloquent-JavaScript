// Retry

// Say you have a function primitiveMultiply that, in 20 percent of cases, 
// multiplies two numbers, and in the other 80 percent, raises an exception 
// of type MultiplicatorUnitFailure. Write a function that wraps this clunky 
// function and just keeps trying until a call succeeds, after which it returns the result.

// Make sure you handle only the exceptions you are trying to handle.

// Author's code

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.2) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure("Klunk");
	}
}


// My code

function reliableMultiply(a, b) {
	let result;

	try {
		result = primitiveMultiply(a, b);
	} catch (e) {
		if (e instanceof MultiplicatorUnitFailure) {
			result = reliableMultiply(a, b);
		} else {
			throw e;
		}
	}

	return result;
}