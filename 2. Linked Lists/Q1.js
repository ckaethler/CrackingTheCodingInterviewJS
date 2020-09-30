// ----------------------------------------------------------------------------
const removeDuplicates = (headNode={}) => {
    let values = new Map(), currentNode = headNode;
    while(currentNode) {
        if(values.has(currentNode.value)) {
            const prevNode = currentNode.prev, nextNode = currentNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        } else {
            values.set(currentNode.value, true);
        }
        currentNode = currentNode.next;
    }
    return headNode;
}

// ----------------------------------------------------------------------------
const removeDuplicates2 = (headNode={}) => {
    let prevNode = headNode, currentNode = headNode.next, values = new Map();
    values.set(prevNode.value, true);
    while(currentNode) {
        if (values.has(currentNode.value)) {
            prevNode.next = currentNode.next;
        } else {
            values.set(currentNode.value, true);
            prevNode = prevNode.next;
        }
        currentNode = currentNode.next;
    }
    return headNode;
}
// ****************************************************************************
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// ****************************************************************************
class LinkedList {
    // ------------------------------------------------------------------------
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // ------------------------------------------------------------------------
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.length++;
        this.tail = newNode;
        return this;
    }

    // ------------------------------------------------------------------------
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.length++;
        this.head = newNode;
        return this;
    }

    // ------------------------------------------------------------------------
    insert(index, value) {
        if(index >= this.length) return this.append(value);
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    // ------------------------------------------------------------------------
    remove(index) {
        if(index >= this.length || index < 0) return this;
        const prevNode = this.traverseToIndex(index-1);
        const unwantedNode = prevNode.next;
        prevNode.next = unwantedNode.next;
        this.length--;
        return this;
    }

    // ------------------------------------------------------------------------
    traverseToIndex(index) {
        let currentNode = this.head;
        while(index !== 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode;
    }

    // ------------------------------------------------------------------------
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    reverse() {
        if(!this.head.next) return this;

        let values = new Array();
        let currentNode = this.head;
        while(currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        
        currentNode = this.head;
        let i = values.length-1;
        while(currentNode) {
            currentNode.value = values[i];
            i--;
            currentNode = currentNode.next;
        }
    }
};

// ****************************************************************************
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(5);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(16);
myLinkedList.printList();
removeDuplicates2(myLinkedList.head);
myLinkedList.printList();