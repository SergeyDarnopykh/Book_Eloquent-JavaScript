// Iterable groups

// Make the Group class from the previous exercise iterable. 
// Refer back to the section about the iterator interface earlier in the chapter 
// if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, 
// don’t just return the iterator created by calling the Symbol.iterator method on the array. 
// That would work, but defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

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

	get size() {
		return this.group.length;
	}

	get all() {
		return this.group;
	}

	static from(object) {
		const group = new Group();

		for (let item of object) {
			group.add(item);
		}

		return group;
	}

	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}

class GroupIterator {
	constructor(groupInstance) {
		this.it = 0;
		this.groupInstance = groupInstance;
	}

	next() {
		if (this.it === this.groupInstance.group.length) return { done: true }

		return { 
			value: this.groupInstance.group[this.it++], 
			done: false
		}
	}
}