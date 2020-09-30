// ----------------------------------------------------------------------------
// 3.3 Stack of Plates
// Imagine a (literal) stack of plates. If the stack gets too high, it might 
// topple. Therefore, in real life, we would likely start a new stack when the 
// previous stack exceeds some threshold. Implement a data strcutre SetOfStacks 
// that mimics this. SetOfStacks should be composed of several stacks and 
// should create a new stack once the previous one exceeds capacity. 
// SetOfStacks.pop() and SetOfStacks.push() should behave identically to a 
// single stack (that is - pop() should return the same values as it would if 
// there was just a single stack).

// FOLLOW UP
// Implement a popAt(index) which implements a pop operation at a specific sub 
// stack
// ----------------------------------------------------------------------------
class SetOfStacks {
    constructor(maxLength) {
        this.maxLength = maxLength;
        this.stacks = [];
        this.currentStack = null;
    }

    push(value) {
        if(!this.currentStack || this.atCapacity(this.currentStack)) {
            this.createNewStack();
        }
        this.currentStack.push(value);
    }

    pop() {
        if(this.isEmpty(this.stacks) || !this.currentStack) return undefined;
        if(!this.isEmpty(this.currentStack)) {
            let val = this.currentStack.pop();
            if(this.isEmpty(this.currentStack)) this.removeLastStack();
            return val;
        } else return undefined;
    }

    createNewStack() {
        const newStack = [];
        this.currentStack = newStack;
        this.stacks.push(newStack);
    }

    removeLastStack() {
        if(this.isEmpty(this.stacks)) return undefined;
        this.stacks.pop();
        if (this.isEmpty(this.stacks)) this.currentStack = null
        else this.currentStack = this.stacks[this.stacks.length - 1];
    }

    atCapacity(stack) {
        return stack.length === this.maxLength;
    }

    isEmpty(stack) {
        return stack.length === 0;
    }

    printStacks() {
        console.log(this.stacks);
    }

    popAt(index) {
        if(this.stacks[index] && !this.isEmpty(this.stacks[index])) {
            const val = this.stacks[index].pop();
            if (this.isEmpty(this.stacks[index])) this.stacks.splice(index, 1);
            return val;
        } else return undefined;
    }
}

// ----------------------------------------------------------------------------
const capacity = 4;
const newSet = new SetOfStacks(capacity);
for(let j = 0; j < capacity; j++) {
    for (let i = 1; i < capacity + 1; i++) {
        newSet.push(i);
    }
}
newSet.printStacks();
newSet.popAt(1);
newSet.popAt(1);
newSet.popAt(1);
newSet.popAt(1);
newSet.printStacks();