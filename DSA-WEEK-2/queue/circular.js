class Queue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.currentLength = 0;
      this.rear = -1;
      this.front = -1;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    isFull() {
      return this.capacity === this.currentLength;
    }
  
    enqueue(value) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = value;
        this.currentLength++;
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is Empty");
      } else {
        let i;
        let str = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + " ";
        }
        str += this.items[i];
        console.log(str);
      }
    }
  }
  const que = new Queue(5);
  console.log(que.isEmpty());
  que.enqueue(10);
  que.enqueue(20);
  que.enqueue(30);
  que.enqueue(40);
  que.enqueue(50);
  console.log(que.isFull());
  que.print();
  console.log(que.dequeue());
  que.peek();
  que.print();