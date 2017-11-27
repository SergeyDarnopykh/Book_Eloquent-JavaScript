// Sequence interface

// Design an interface that abstracts iteration over a collection of values. 
// An object that provides this interface represents a sequence, 
// and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, 
// looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.

// When you have specified your interface, 
// try to write a function logFive that takes a sequence object and calls console.log on
//  its first five elements—or fewer, if the sequence has fewer than five elements.

// Then implement an object type ArraySeq that wraps an array and allows iteration over 
// the array using the interface you designed. Implement another object type RangeSeq 
// that iterates over a range of integers (taking from and to arguments to its constructor) instead.

function RangeSeq(first, last) {
    this.first = first;
    this.last = last;
}

RangeSeq.prototype.forEach = function (action, itNumber) {
    const elNumber = this.last - this.first + 1,
        last = itNumber ? (this.first + Math.min(itNumber, elNumber) - 1) : this.last;
  	
    for (let i = this.first; i <= last; i++) { 
      action(i);
    }
}

function logFive(sequence) {
    sequence.forEach(console.log, 5);
}

