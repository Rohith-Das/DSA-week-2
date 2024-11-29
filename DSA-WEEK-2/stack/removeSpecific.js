class Stack{
    constructor(){
        this.item=[]
    }
    push(value){
        this.item.push(value)
    }
    pop(){
        if(this.isempty()){
            return null
        }
      return  this.item.pop()
    }
    isempty(){
        return this.item.length===0
    }
    peek(){
        return this.item[this.item.length-1]
    }
    
    removesp(value){
        let tem=[];
        while(!this.isempty()){
            let top=this.pop()
            if(top !== value){
                tem.push(top)
            }
        }
        while(tem.length >0){
            this.push(tem.pop())
        }
    }
    print(){
        console.log(this.item)
    }
}
const stack=new Stack()
stack.push(89)
stack.push(67)
stack.push(45)
stack.print()
stack.removesp(45)
stack.print()