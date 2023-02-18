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
        let tmp = new Node(value); // create new node
        tmp.next = this.head // point next to equal the head
        this.head = tmp // move head to point to new node
    }

    size() {
        let amountOfNodes = 0 // counter of number of nodes
        let nodeLength = this.head // starting node

        while (nodeLength != null) { // while head does not equal null
            nodeLength = nodeLength.next // point to head next value
            amountOfNodes++ // increment counter
        }
        return amountOfNodes 
    }

    returnHead() {
        if (!this.head) return null // if not head return null
        return this.head // else return head node
    }

    returnTail() {
        let tail = this.head // declare head node

        do {
            tail = tail.next // tail points to next value while tail != null
            if (tail.next === null) { // if tail next point == null return tail (because it is the last node)
                return tail
            }
        } while (tail != null) 
    }

    atIndex(index) {
        let count = 0 // create counter variable
        let currentNode = this.head 

        while (currentNode) { // while current node is the head node
            if (count === index) { // if counter is equal to passed in index value
                return currentNode // return that node
            }

            count++ // increment counter while statement is true
            currentNode = currentNode.next // assign current node to the next node in list
        }
    }

    pop() {
      let currentNode = this.head // current node
      let previousNode = null // previous node
      while (currentNode.next != null) { // while next value of current node does not equal null
        previousNode = currentNode // assign previous node to current node
        currentNode = currentNode.next // assign current node to next node value
      }
      previousNode.next = null // assign the next value of previous node to equal null
    }


}

class Node {

    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }


}

const list = new LinkedList()
list.append(6)
list.prepend(7)
list.prepend(1)
list.pop()
// console.log(list)
// console.log(list.size())
// console.log(list.returnHead())
// console.log(list.returnTail())
// console.log(list.atIndex(1))
