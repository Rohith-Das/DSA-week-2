class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null; // Use `head` instead of `first`
        this.tail = null; // Use `tail` instead of `last`
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
    enqueue(item) {
        const node = new Node(item);
        if (this.isEmpty()) {
            this.head = node; // Use `head` instead of `first`
            this.tail = node; // Use `tail` instead of `last`
        } else {
            this.tail.next = node; // Use `tail` instead of `last`
            this.tail = node; // Update `tail`
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let removeValue = this.head.value; // Use `head` instead of `first`
        if (this.head === this.tail) { // Use `head` and `tail` instead of `first` and `last`
            this.tail = null; // If only one element was present, set `tail` to null
        }
        this.head = this.head.next; // Move `head` to the next node
        this.size--;
        return removeValue;
    }

    peek() {
        if (this.isEmpty()) {
            return 'empty queue';
        }
        return this.head.value; // Use `head` instead of `first`
    }

    print() {
        if (this.isEmpty()) {
            return 'empty queue';
        }
        let curr = this.head; // Use `head` instead of `first`
        let listedValues = '';
        while (curr) {
            res += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listedValues);
    }
}

// Example usage
const queue = new Queue();
console.log(queue.isEmpty()); // true

for (let i = 5; i < 12; i++) {
    queue.enqueue(i);
}

queue.print(); // 5 6 7 8 9 10 11
console.log(queue.peek()); // 5
console.log(queue.getSize()); // 7
