class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.items[0]
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
let queue=new Queue()
queue.enqueue(19)
queue.enqueue(20)
queue.enqueue(40)
queue.dequeue()
queue.print()
