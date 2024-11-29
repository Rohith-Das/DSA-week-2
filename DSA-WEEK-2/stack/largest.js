class Stack{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        return this.items.join(" ")
    }
    largest(){
        if(this.items.length === 0){
            return null
        }
        let large= this.items[0];
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]>large){
                large=this.items[i];
            }
        }
        return large
    }
}
const stack=new Stack()
stack.push(99)
stack.push(88)
stack.push(77)
console.log(stack.print())
console.log(stack.largest())
// stack.pop()
// console.log(stack.print())