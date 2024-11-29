class StackToQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Enqueue operation (Push to stack1)
    enqueue(value) {
        this.stack1.push(value);
    }

    // Dequeue operation (Pop from stack2)
    dequeue() {
        if (this.stack2.length === 0) {
            // Transfer all elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            console.log("Queue is empty");
            return null;
        }

        // Pop from stack2 (FIFO behavior)
        return this.stack2.pop();
    }

    // Check if queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Peek the front of the queue
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
}

// Example usage
const queue = new StackToQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.peek());    // 3
