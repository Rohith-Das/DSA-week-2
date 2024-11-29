class QueueToStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    // Push operation (Enqueue to queue1)
    push(value) {
        this.queue1.push(value);
    }

    // Pop operation (Dequeue from queue1, transfer to queue2)
    pop() {
        if (this.queue1.length === 0) {
            console.log("Stack is empty");
            return null;
        }

        // Move all elements except the last one to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        // The last element of queue1 is the top element of the stack
        const poppedElement = this.queue1.shift();

        // Swap the names of queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedElement;
    }

    // Check if stack is empty
    isEmpty() {
        return this.queue1.length === 0;
    }

    // Peek the top of the stack
    peek() {
        if (this.queue1.length === 0) {
            console.log("Stack is empty");
            return null;
        }

        // The last element of queue1 is the top element of the stack
        return this.queue1[this.queue1.length - 1];
    }
}

// Example usage
const stack = new QueueToStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // 3
console.log(stack.pop());  // 2
console.log(stack.peek()); // 1
