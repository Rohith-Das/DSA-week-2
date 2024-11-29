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
        return this.item.length ===0
    }
   removeMid(){
       if(this.isempty()){
           return null
       }else{
           let mid=Math.floor(this.item.length/2)
           return this.item.splice(mid,1)
       }
   }
    print(){
        console.log(this.item)
    }
}

let stack=new Stack()
stack.push(89)
stack.push(44)
stack.push(33)
stack.print()
stack.removeMid()
stack.print()

