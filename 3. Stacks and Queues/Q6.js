// ----------------------------------------------------------------------------
// 3.6 Animal Shelter
// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" bases. People must adopt either the "oldest" (based on 
// arrival time) of all animals at the shelter, or they can select whether they 
// would prefer a dog or a cat (and will recieve the olest animal of that 
// type). They cannot select which specific animal they would like. Create the 
// data structures to maintain this system and implement operations such as 
// enqueue, dequeueAny, dequeueDog, and deQueueCat. You mayse use the built-in 
// LinkedList data structure.
// ----------------------------------------------------------------------------
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// ----------------------------------------------------------------------------
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode.value;
    }

    dequeue() {
        if(this.isEmpty()) return null;
        const oldHead = this.head;
        const newHead = this.head.next;
        this.head = newHead;
        this.length--;
        return oldHead.value;
    }

    front() {
        if(this.isEmpty()) return null;
        return this.head.value;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }

    printQueue() {
        let currentNode = this.head, values_arr = [];
        while(currentNode) {
            values_arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        const values = values_arr.join(' ');
        console.log(values);
    }
}

// ----------------------------------------------------------------------------
class Animal {
    constructor(type, timestamp, name) {
        this.timstamp = timestamp;
        this.type = type;
        this.name = name;
    }
}

// ----------------------------------------------------------------------------
class AnimalShelter {
    constructor() {
        this.cats = new Queue();
        this.dogs = new Queue();
    }

    enqueue(newAnimal) {
        if (newAnimal.type === "cat") {
            this.cats.enqueue(newAnimal);
        } else if(newAnimal.type === "dog") {
            this.dogs.enqueue(newAnimal);
        } else return undefined;
    }

    dequeueAny() {
        if(!this.dogs.isEmpty() && this.getOldestDogTime() > this.getOldestCatTime()) {
            return this.dequeueDog();
        } else if (!this.cats.isEmpty()) return this.cats.dequeue();
        else throw Error;
    }

    dequeueDog() {
        return this.dogs.dequeue();
    }

    dequeueCat() {
        return this.cats.dequeue();
    }

    getOldestDogTime() {
        const dog =  this.dogs.front();
        return dog.timestamp;
    }

    getOldestCatTime() {
        const cat = this.cats.front();
        return cat.timestamp;
    }

    isEmpty() {
        return this.cats.isEmpty() && this.cats.isEmpty();
    }

    printQueues() {
        console.log("Dogs:");
        let currentNode = this.dogs.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("Cats:");
        currentNode = this.cats.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

// ----------------------------------------------------------------------------
const newShelter = new AnimalShelter();
const animals = ["cat", "dog", "cat", "cat", "dog", "dog", "dog"];
const letters = "qwertyuiopasdfghjklzxcvbnm";
for (let i = 0; i < animals.length; i++) {
    const timestamp = Date.now();
    let name = "";
    for(let j = 0; j < animals.length; j++) {
        let index = Math.floor(Math.random() * letters.length);
        name += letters[index];
    }
    const newAnimal = new Animal(animals[i], timestamp, name);
    newShelter.enqueue(newAnimal);
}
newShelter.printQueues();
console.log();
console.log(newShelter.dequeueCat());
console.log(newShelter.dequeueDog());
console.log(newShelter.dequeueAny());
console.log();
newShelter.printQueues();
