// ----------------------------------------------------------------------------
// Two numbers represented by a linked list
// each node contains a single digit
// digits in reverse order
// 1's digit at head of list
// write function adds two numbers
// return sum as linked list

// Example
// Input: (7 -> 1 -> 6) + (5 + 9 + 2)
// 617 + 295
// Output: 2 -> 1 -> 9

// Brute Force
// iterate through numbers
// multiply numbers in ascending ten multipliers (1, 10, 100) as iterating
// Keep a running total
// Linked List number translator seperate function

// PSEUDOCODE -----------------------------------------------------------------
const listsMultipler = (list_1, list_2) => {
    let list_1_node = list_1.head, list_2_node = list_2.head, carryover = 0;
    const newList = new LinkedList(null);
    while(list_1_node || list_2_node) {
        let new_val = carryover;
        if (list_1_node) {
            new_val += list_1_node.value;
            list_1_node = list_1_node.next;
        }
        if (list_2_node) {
            new_val += list_2_node.value;
            list_2_node = list_2_node.next;
        } 
        if (new_val >= 10) {
            carryover = 1;
            new_val -= 10;
        } else carryover = 0;
            
        if(!newList.head.value) newList.head.value = new_val;
        else newList.append(new_val);
    }
    newList.printList();
    return newList;
}

// ----------------------------------------------------------------------------
// Suppose the digits are stored in forward order. Repeat the above problem.
// Example:
// 9 -> 2 -> 5 -> 1
//           6 -> 9
// ----------------
// 9 -> 3 -> 2 -> 0

// get lengths of both, calculate longer one and offset
// create pointers to head of both lists called longer and shorter list
// while both node pointers arent null
    // if offset is greater than 0
        // append longer 

// ----------------------------------------------------------------------------
// Two numbers represented by a linked list
// each node contains a single digit
// digits in reverse order
// 1's digit at head of list
// write function adds two numbers
// return sum as linked list

// Example
// Input: (7 -> 1 -> 6) + (5 + 9 + 2)
// 617 + 295
// Output: 2 -> 1 -> 9

// Brute Force
// iterate through numbers
// multiply numbers in ascending ten multipliers (1, 10, 100) as iterating
// Keep a running total
// Linked List number translator seperate function

// Example:
// 7 -> 1 -> 6
// 5 -> 9 -> 2

//      1    1
// 7 -> 1 -> 6
// 5 -> 9 -> 2
// -----------
// 12   11   9
// 2    1    9

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

const second_list = new LinkedList(5);
second_list.append(9);
second_list.append(2);

listsMultipler(first_list, second_list);