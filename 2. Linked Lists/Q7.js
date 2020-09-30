// ----------------------------------------------------------------------------
// 2.7 Intersection
// Given two (singly) linked lists, determine if the two lists intersect.
// Return the intersecting node. Note that the intersection is defined based on
// reference, not value. That is, if the kth node of the first linked list is 
// the exact same node (by reference) as the jth node of the second linked 
// list, then they are intersecting.
// 5 -> 6 -> 4 ->
//           3 -> 2 -> 1
// ----------------------------------------------------------------------------
const linkedListIntersection = (list_1, list_2) => {
    // test base case lists arent empty
    let offset = Math.abs(list_1.length - list_2.length); 
    let first_node, second_node;
    if (list_1.length > list_2.length) {
        first_node = list_1.head;
        second_node = list_2.head;
    } else {
        first_node = list_2.head;
        second_node = list_1.head;
    }
    while (first_node) {
        if (first_node === second_node) return first_node;
        first_node = first_node.next;
        if(offset < 1) second_node = second_node.next;
        offset--;
    }
    return false;
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

const second_list = new LinkedList(1);
second_list.append(2);
second_list.append(3);
second_list.append(4);
second_list.append(5);
second_list.append(5);
second_list.append(5);
second_list.printList();

console.log(linkedListIntersection(first_list, first_list));