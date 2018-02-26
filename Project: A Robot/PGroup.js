// Persistent group

// Most data structures provided in a standard JavaScript environment 
// aren’t very well suited for persistent use. Arrays have slice and concat methods, 
// which allow us to easily create new arrays without damaging the old one. But Set, 
// for example, has no methods for creating a new set with an item added or removed.

// Write a new class PGroup, similar to the Group class from Chapter 6, 
// which stores a set of values. Like Group, it has add, delete, and has methods.

// Its add method, however, should return a new PGroup instance 
// with the given member added, and leave the old one unchanged. 
// Similarly, delete creates a new instance without a given member.

// The class should work for keys of any type, not just strings. 
// It does not have to be efficient when used with large amounts of keys.

// The constructor shouldn’t be part of the class’ interface 
// (though you’ll definitely want to use it internally). 
// Instead, there is an empty instance, PGroup.empty, 
// that can be used as a starting value.

// Why do you only need one PGroup.empty value, rather 
// than having a function that creates a new, empty map every time?

class PGroup {
	constructor(data = []) {
		this.data = data;
	}

	static get empty() {
		return new PGroup();
	}

	has(value) {
		return this.data.includes(value);
	}

	add(value) {
		const newGroup = new PGroup(this.data.slice());

		if (!newGroup.has(value)) {
			newGroup.data.push(value);
		}

		return newGroup;
	}

	delete(value) {
		const newGroup = new PGroup(this.data.slice());

		if (newGroup.has(value)) {
			newGroup.data = newGroup.data.filter(item => item !== value);
		}

		return newGroup;
	}
}