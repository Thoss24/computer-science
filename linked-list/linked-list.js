class LinkedList {

    constructor(head = null) {
        this.head = head
    }

    append(value) {
        let tmp = new Node(value) // create new node with given value
        if (!this.head) { // if list is empty set the new node as the head and return it
            this.head = tmp 
            return this.head 
        } else { // if list is not empty set the next of the new node as the head and change the head to equal the new node
            tmp.next = this.head 
            this.head = tmp
        }
        return this.head // return the new head of the updated linked list
        
    }

    prepend(value) {

    }
}

class Node {

    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }


}

const list = new LinkedList()
console.log(list.append(2))

