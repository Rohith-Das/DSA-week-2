class Stack{
    constructor(){
        this.item=[]
    }
    push(value){
        this.item.push(value)
    }
    pop(){
        return this.item.pop()
    }
    isempty(){
        return this.item.length===0
    }
    reverse(str){
        for(let i of str){
            this.item.push(i)
        }
        let a=""
        while(!this.isempty()){
            a +=this.item.pop()
        }
        return a
    }
    print(){
        console.log(this.item)
    }
    
}
const stack=new Stack()
console.log(stack.reverse("rohitdas"))
stack.print()