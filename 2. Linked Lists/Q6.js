// ----------------------------------------------------------------------------
// Implement a function to check if a linked list is a palindrome
// 7 -> 1 -> 6 -> 1 -> 7
// 0    1    2    3    4
//      * ------- *
// middle = 5 / 2 - 1 = 2
// 1 -> 2 -> 2 -> 1
// 0 -- 1 -- 2 -- 3
// middle = 4 / 2 - 1 = 1

// ----------------------------------------------------------------------------
const isPalindrome = (linkedList = {}) => {
    if (linkedList === {} || (!linkedList.head.next)) return false;
    const tempValues = new Array();
    const pattern_end = Math.floor(linkedList.length / 2) - 1;
    let currentNode = linkedList.head, index = 0, reverse_start;

    if (linkedList.length % 2 === 1) reverse_start = pattern_end + 2;
    else reverse_start = pattern_end + 1;

    while (currentNode) {
        if(index <= pattern_end) tempValues.push(currentNode.value);
        else if (index >= reverse_start) {
            let val = tempValues.pop()
            if (currentNode.value !== val) return false;
        }
        index++;
        currentNode = currentNode.next;
    }
    return true;
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
const first_list = new LinkedList(7);
first_list.append(1);
first_list.append(6);
first_list.append(1);
first_list.append(7);
first_list.printList();
console.log(isPalindrome(first_list));