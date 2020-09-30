// ----------------------------------------------------------------------------
const partitionList = (head={}, p) => {
    if(head === {} || (!head.next)) return false;
    let greater_arr = new Array();
    let lesser_arr = new Array();
    let currentNode = head;
    while(currentNode) {
        if (currentNode.value >= p) greater_arr.push(currentNode.value);
        else if (currentNode.value < p) lesser_arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    currentNode = head;
    let val;
    while(currentNode) {
        if(lesser_arr.length !== 0) val = lesser_arr.pop();
        else if (greater_arr.length !== 0) val = greater_arr.pop();
        currentNode.value = val;
        currentNode = currentNode.next;
    }
    return head;
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
myLinkedList.append(1);
myLinkedList.append(5);
myLinkedList.append(2);
myLinkedList.append(6);
myLinkedList.append(9);
myLinkedList.printList();
partitionList(myLinkedList.head, 5);
myLinkedList.printList();
