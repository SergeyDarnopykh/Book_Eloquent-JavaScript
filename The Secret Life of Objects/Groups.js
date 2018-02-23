// Groups

// The standard JavaScript environment provides another data structure called Set. 
// Like an instance of Map, a set holds a collection of values. Unlike Map, 
// it does not associate other values with those—it just tracks which values are part of the set. 
// A value can only be part of a set once—adding it again doesn’t have any effect.

// Write a class called Group (since Set is already taken).
// Like Set, it has add, delete, and has methods. Its constructor creates an empty group, 
// add adds a value to the group (but only if it isn’t already a member), 
// delete removes its argument from the group (if it was a member), 
// and has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, 
// to determine whether two values are the same.

// Give the class a static from method that takes an iteratable object as argument 
// and creates a group that contains all the values produced by iterating over it.

class Group {
	constructor() {
		this.group = [];
	}

	add(value) {
		if (!this.has(value)) {
			this.group.push(value);
		}
	}

	delete(value) {
		if (this.has(value)) {
			const valIndex = this.group.indexOf(value);
			this.group = this.group.slice(0, valIndex)
							.concat(this.group.slice(valIndex + 1));
		}
	}

	has(value) {
		return this.group.includes(value);
	}

	static from(object) {
		const group = new Group();

		for (let item of object) {
			group.add(item);
		}

		return group;
	}
}