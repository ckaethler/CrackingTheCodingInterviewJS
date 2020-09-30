// ----------------------------------------------------------------------------
const deleteMiddle = (middleNode = {}) => {
    if (middleNode === {} || (!middleNode.next)) return undefined;
    let currentNode = middleNode;
    while(currentNode) {
        currentNode.value = currentNode.next.value;
        if(!currentNode.next.next) currentNode.next = null;
        currentNode = currentNode.next;
    }
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
        while(currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
};

// ****************************************************************************
const myLinkedList = new LinkedList(6);
myLinkedList.append(5);
myLinkedList.append(4);
myLinkedList.append(3);
myLinkedList.append(2);
myLinkedList.append(1);
myLinkedList.printList();
deleteMiddle(myLinkedList.traverseToIndex(2));
myLinkedList.printList();
