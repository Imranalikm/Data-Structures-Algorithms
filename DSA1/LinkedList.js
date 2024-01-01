class Node{
    constructor(value){
        this.value =value
        this.next=null
    }
}

class Linkedlist{

    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail =newNode;
        }
        this.length++;
        return this;
    }

    pop(){
       

    }
}

// var list = new Linkedlist();
// list.push(4);
// list.push(3);
// list.push(7);   
// list.push(6)
// list.push(8);
// console.log(list);


