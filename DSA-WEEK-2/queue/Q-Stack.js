class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Method to add an element to the queue
    enqueue(value) {
        this.stack1.push(value);
    }

    // Method to remove an element from the queue
    dequeue() {
        if (this.stack2.length === 0) {
            // Transfer all elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // If stack2 is still empty after transferring, the queue is empty
        if (this.stack2.length === 0) {
            return null; // or throw an error indicating the queue is empty
        }

        // Pop and return the top element from stack2, which is the front of the queue
        return this.stack2.pop();
    }

    // Method to get the front element of the queue without removing it
    peek() {
        if (this.stack2.length === 0) {
            // Transfer all elements from stack1 to stack2 if stack2 is empty
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // If stack2 is still empty after transferring, the queue is empty
        if (this.stack2.length === 0) {
            return null; // or throw an error indicating the queue is empty
        }

        // Return the top element from stack2, which is the front of the queue
        return this.stack2[this.stack2.length - 1];
    }

    // Method to get the size of the queue
    size() {
        return this.stack1.length + this.stack2.length;
    }

    // Method to check if the queue is empty
    empty() {
        return this.size() === 0;
    }
}

// Example usage
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
console.log(queue.empty()); // Output: false
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.empty()); // Output: true
