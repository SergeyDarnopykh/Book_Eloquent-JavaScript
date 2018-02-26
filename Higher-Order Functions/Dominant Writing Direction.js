// Dominant writing direction

// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be "ltr" (left-to-right), 
// "rtl" (right-to-left), or "ttb" (top-to-bottom).

// The dominant direction is the direction of a majority of the characters 
// which have a script associated with them.
// The characterScript and countBy functions defined earlier 
// in the chapter are probably useful here.

function dominantDirection(text) {
	const scripts = countBy(text, char => {
		const script = characterScript(char.codePointAt(0));

		return script ? script.direction : 'none';
	}).filter(({ name }) => name !== 'none');

	// Added later, I forgot about the empty array case
	if (!script.length) return 'none';

	return scripts.reduce((a, b) => {
		return a.count > b.count ? a : b;
	}, []).name;
}