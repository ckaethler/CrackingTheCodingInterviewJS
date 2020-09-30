// ----------------------------------------------------------------------------
// 3.2 How would you design an stack which, in addition to push and pop, has a 
// function min which returns the minimum element? Push, pop, and min all
// operate in O(1) time.

// push takes value
    // pushes value onto stack
    // if min stack empty or if less than last value on min stack
        // push onto min stack
    
// pop
    // save pop of last value in variable
    // if equal to value on min stack
        // pop min stack

// min
    // returns peek of min stack

// ****************************************************************************
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
    printStack() {
        // let items_str = "";
        // for (let i = 0; i < this.items.length; i++) items_str += this.items[i];
        // return items_str;
        console.log(this.items);
    }
}

// ****************************************************************************
class StackWithMin extends Stack {
    constructor() {
        super();
        this.min_stack = new Stack();
    }

    push(value) {
        super.push(value);
        if (this.min_stack.isEmpty() || this.min_stack.peek() > value) {
            this.min_stack.push(value);
        }
        return value;
    }

    pop() {
        let val = super.pop();
        if (val === this.min_stack.peek()) this.min_stack.pop();
        return val;
    }

    min() {
        return this.min_stack.peek();
    }

    printMinStack() {
        // let items_str = "";
        // for (let i = 0; i < this.min_stack.length; i++) {
        //     items_str += ` ${this.min_stack[i]}`;
        // }
        // return items_str;
        console.log(this.min_stack);
    }
}

// ****************************************************************************
const new_stack = new StackWithMin();
console.log("Is empty ", new_stack.isEmpty());
console.log("Pop ", new_stack.pop());
console.log("Push 10 ", new_stack.push(10));
console.log("Min ", new_stack.min());
console.log("Push 20 ", new_stack.push(5));
console.log("Min ", new_stack.min());
console.log("Push 20 ", new_stack.push(4));
console.log("Min ", new_stack.min());
console.log("Push 10 ", new_stack.push(3));
console.log("Min ", new_stack.min());
console.log("Push 10 ", new_stack.push(2));
console.log("Min ", new_stack.min());
console.log("Push 10 ", new_stack.push(1));
new_stack.printStack();
console.log("Peek ", new_stack.peek());
console.log("Pop ", new_stack.pop());
console.log("Min ", new_stack.min());
new_stack.printStack();