// ----------------------------------------------------------------------------
// Given a circular linked list, implement an algorithm that returns the node 
// at the beginning of the loop.
// DEFINITION:
// Circular linked list: A (corrupt) linked list in which a node's next 
// pointer points to an earlier node, so as to make a look in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// main function takes one linked list
    // test for legitimacy
    // Create two pointers both point to head of list
    // iterate through list while fast node and fast node's next node not null
        // check if slow node and fast node are equal
            // if equal, send to collision finder equation
        // iterate slow pointer by one
        // iterate fast pointer by two
    // return false
// ----------------------------------------------------------------------------
const detectCircularList = (linkedList = {}) => {
    if (linkedList === {} || !linkedList.head || !linkedList.head.next) {
        return undefined;
    }
    let slowNode = fastNode = linkedList.head;
    while(fastNode && fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if(slowNode === fastNode) return getCollision(linkedList.head, fastNode);
    }
    return false;
}

// ----------------------------------------------------------------------------
// collision finder equation takes linked list head, fast pointer
    // create pointer for head
    // while the two pointers arent equal
        // iterate both by 1
    // return one of the pointers
// ----------------------------------------------------------------------------
const getCollision = (headNode, fastNode) => {
    let slowNode = headNode;
    while(slowNode !== fastNode || !slowNode || !fastNode) {
        slowNode = slowNode.next;
        fastNode = fastNode.next;
    }
    if(!slowNode || !fastNode) return false
    return fastNode;
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
    traverseToValue(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
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
const first_list = new LinkedList('A');
first_list.append('B');
first_list.append('C');
first_list.append('D');
first_list.append('E');
// first_list.printList();
const newNode = first_list.traverseToValue('C');
first_list.tail.next = newNode;
first_list.tail = newNode;

console.log(detectCircularList(first_list));