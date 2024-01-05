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


    
    display() {
        let listStg = ""
        if(this.head == null) {
            return listStg
        }

        listStg += this.head.value 
        let runner = this.head.next 
        while (runner != null) {
            listStg += ", " + runner.value 
            runner = runner.next 
        }
        return listStg
    }
}

let mySLL = new SLL()


mySLL.addFront(205)
mySLL.addFront(87)
mySLL.addFront(25)

console.log(mySLL.display())
