// ----------------------------------------------------------------------------
// 3.5 Sorted Stacks
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
const sortStack = (mainStack) => {
    if(mainStack.isEmpty()) return undefined;
    const sortedStack = new Stack();
    while(!mainStack.isEmpty()) {
        const temp = mainStack.pop();
        if(sortedStack.isEmpty() || temp > sortedStack.peek()) {
            sortedStack.push(temp);
        } else {
            while(temp < sortedStack.peek() || !sortedStack.isEmpty()) {
                const val = sortedStack.pop();
                mainStack.push(val);
            }
            sortedStack.push(temp);
        }
    }
    while(!sortedStack.isEmpty()) {
        const val = sortedStack.pop();
        mainStack.push(val);
    }
    return mainStack;
}

// ----------------------------------------------------------------------------
const newStack = new Stack();
newStack.push(1);
newStack.push(5);
newStack.push(3);
newStack.push(7);
newStack.push(2);
newStack.push(9);
newStack.printStack();
sortStack(newStack);
newStack.printStack();