const Node = require('./Node')
class Linked {
    constructor() {
        this.head = null
    }

}
let linkedList=new Linked()
linkedList.head=new Node(5)
linkedList.head.next=new Node(7)
linkedList.head.next.next=new Node(8)

let reverse = (linkedList) => {

    let linked1 = new Linked()
    let current = linkedList.head
    if (current == null) {
        return "exeption"
    }
    while (current !== null) {
        if (linked1.head == null) {
            let node = new Node(current.value)
            linked1.head = node
        }
        else {
            let node = new Node(current.value)
            node.next = linkedList.head
            linked1.head = node

        }
        current = current.next
    }
    return linked1
}
reverse(linkedList);
