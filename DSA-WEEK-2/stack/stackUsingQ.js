class StackUsingQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value) {
        this.queue2.push(value);
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        if (this.queue1.length === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue1.shift();
    }

    peek() {
        if (this.queue1.length === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue1[0];
    }

    isEmpty() {
        return this.queue1.length === 0;
    }
}

// Usage
const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop());  // Output: 3
console.log(stack.pop());  // Output: 2
console.log(stack.isEmpty()); // Output: false
