class Queue{
    constructor(){
        this.item=[]
        this.rear=0
        this.front=0
    }
    enqueue(element){
      this.item[this.rear]=element
      this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            return "its empty"
        }
        const item=this.item[this.front]
        delete this.item[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.front === this.rear
    }
    size(){
        return this.rear - this.front
    }
    peek(){
        return this.item[this.front]
    }
    print(){
        console.log(this.item)
    }
}
let queue = new Queue();
queue.enqueue(10);      // Add 10 to the queue
queue.enqueue(1044);    // Add 1044 to the queue
queue.enqueue(104);     // Add 104 to the queue

queue.print();          // Print the queue
queue.dequeue();        // Remove the front element (10)
console.log(queue.dequeue()); // Remove the next front element (1044)
queue.print();          // Print the queue again
console.log(queue.peek());    // Peek at the front element
console.log(queue.size());    // Print the size of the queue
console.log(queue.isEmpty()); // Check if the queue is empty


