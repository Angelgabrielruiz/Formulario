import { Node } from "./Node.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new RangeError('Index out of bounds');
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        let previous;
        let i = 0;

        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError('Index out of bounds');
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            if (!this.head) {
                this.tail = null;
            }
        } else {
            let previous;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
            if (index === this.size - 1) {
                this.tail = previous;
            }
        }
        this.size--;
        return current.value;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    getSize() {
        return this.size;
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

export default LinkedList;
