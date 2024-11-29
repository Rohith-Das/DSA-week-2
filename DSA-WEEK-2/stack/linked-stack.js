class Node{
    constructor(value){
        this.value = value;
        this.next=null
    }
}
class Stack{
    constructor(){
        this.head=null
        this.size=0
    }
    push(value){
        const node=new Node(value);
        node.next=this.head
        this.head=node
        this.size++
    }
    pop(){
        if(this.isempty()){
            console.log("it's emoty")
            return null
        }
        const value=this.head.value
        this.head=this.head.next
        this.size--
        return value
          
    }
    peek(){
        if(this.isempty()){
            return null
        }
        return this.head.value
    }
    isempty(){
        return this.size===0
    }
    print(){
        let curr= this.head
        let ele=[]
        while(curr){
            ele.push(curr.value)
            curr=curr.next
        }
        console.log(ele.join("->"))
    }

}
let stack=new Stack()
stack.push(30)
stack.push(40)
stack.push(10)
stack.print()
console.log(stack.peek())