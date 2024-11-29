class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            console.log('empty')
            return null
        }
       return this.items.pop()
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length===0
    }
    clear(){
        this.items = []
    }
    print(){
        console.log(this.items)
    }
     reverse(str){
        for(let a of str){
            this.push(a)
        }
        let reversestr = ''
        while(!this.isEmpty()){
            reversestr += this.pop()
        }
        return reversestr
    }
}
 

const stack = new Stack()
const str = 'hello world'
const a = stack.reverse(str)
console.log(a)
