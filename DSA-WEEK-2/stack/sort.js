class Stack{
    constructor(){
        this.item=[]
    }
    push(value){
        this.item.push(value)
    }
    pop(){
        if(this.isempty()){
            return undefined

        }
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length -1]
    }
    isempty(){
        return this.item.length === 0
    }
    print(){
        console.log(this.item)
    
    }
    sort(){
        let tempstack=new Stack();
        while(!this.isempty()){
            let temp=this.pop()
            while(!tempstack.isempty() && tempstack.peek() > temp){
                this.push(tempstack.pop())
            }
            tempstack.push(temp)
        }
        while(!tempstack.isempty()){
            this.push(tempstack.pop())
        }
    }
   

    
}
const stack=new Stack()
stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log("Original Stack:");
stack.print();

stack.sort();

console.log("Sorted Stack:");
stack.print();