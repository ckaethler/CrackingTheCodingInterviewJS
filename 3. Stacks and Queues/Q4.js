// ----------------------------------------------------------------------------
// 3.4 Queue via Stacks
// Implement a MyQueue class which implements a queue using two stacks
// ----------------------------------------------------------------------------
class Stack {
    // ------------------------------------------------------------------------
    constructor() {
        this.items = [];
    }

    // ------------------------------------------------------------------------
    push(item) {
        this.items.push(item);
        return true;
    }

    // ------------------------------------------------------------------------
    pop() {
        // if (this.items.length === 0) return false;
        return this.items.pop();
    }

    // ------------------------------------------------------------------------
    peek() {
        if (this.isEmpty()) return null;
        else return this.items[this.items.length - 1];
    }

    // ------------------------------------------------------------------------
    isEmpty() {
        return this.items.length === 0;
    }

    // ------------------------------------------------------------------------
    getLength() {
        return this.items.length;
    }

    // ------------------------------------------------------------------------
    getIndex(index) {
        return this.items[index];
    }

    // ------------------------------------------------------------------------
    printStack() {
        // let items_str = "";
        // for (let i = 0; i < this.items.length; i++) items_str += this.items[i];
        // return items_str;
        console.log(this.items);
    }
}

// ----------------------------------------------------------------------------
class MyQueue extends Stack {
    constructor() {
        super();
        this.reversed = new Stack();
        this.in_order = new Stack();
    }

    enqueue(value) {
        this.in_order.push(value);
    }

    dequeue() {
        if (this.reversed.isEmpty()) {
            if(this.in_order.isEmpty()) return undefined;
            else this.shiftStacks();
        }
        return this.reversed.pop();
    }

    front() {
        if (this.reversed.isEmpty()) {
            if(this.in_order.isEmpty()) return undefined;
            else this.shiftStacks();
        }
        return this.reversed.getIndex(this.reversed.getLength() - 1);
    }

    shiftStacks() {
        if (!this.reversed.isEmpty() || this.in_order.isEmpty()) return undefined;
        const length = this.in_order.getLength();
        for(let i = 0; i < length; i++) {
            let val = this.in_order.pop();
            this.reversed.push(val);
        }
    }

    isEmpty() {
        return this.reversed.isEmpty() && this.in_order.isEmpty();
    }

    printQueue() {
        console.log(this.reversed.items, this.in_order.items);
    }
}

// ----------------------------------------------------------------------------
const newQueue = new MyQueue();
newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.enqueue(50);
newQueue.printQueue();
console.log(newQueue.front())
newQueue.printQueue();