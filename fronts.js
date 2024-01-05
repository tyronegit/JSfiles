class SLLNode { 
    constructor(val) {
        this.value = val 
        this.next = null 
    }
}

class SLL { 
    constructor() {  
        this.head = null  
    }    
    
    addFront(value) {
        let newNode = new SLLNode(value)
        newNode.next = this.head
        this.head  = newNode
        return this.head; 
    }

    
    removeFront() {
        if(this.head == null) { 
            return this.head
        }
        let removedNode = this.head 
        this.head = removedNode.next 
        removedNode.next = null
        return this.head
    }



    front() {    
        if (this.head == null) {
            return null
        } else {
            return this.head.value;
        }         
    }
}

let mySLL = new SLL()  
console.log("Front method output:")
console.log(mySLL.front())
mySLL.addFront(10)
console.log(mySLL.front())
mySLL.addFront(5)
console.log(mySLL.front())
mySLL.addFront(3)
console.log(mySLL.front())

console.log("\n Add Front method output:")
console.log (mySLL.addFront(18))
console.log (mySLL.addFront(256))
console.log (mySLL.addFront(9))


console.log("\n Remove Front method output:")
console.log(mySLL)
mySLL.removeFront()


