const {Node,LinkedList} = require('./LinkedList');
// Time complexity O(N) | SPACE COMPLEXITY O(1)
const reverseLinkedList=(list)=>{

   let previousNode=null;
   let currentNode=list.head;
   let nextNode=currentNode.next;

   while(currentNode){
    nextNode=currentNode.next;
    currentNode.next=previousNode;
    previousNode=currentNode;
    currentNode=nextNode;
   }

   list.head=previousNode;
}


const node1= new Node(1);
const node2= new Node(2);
const node3= new Node(3);
const node4= new Node(4);
const node5= new Node(5);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

const list=new LinkedList(node1);
list.printList();
console.log("***********************************************")
reverseLinkedList(list);
list.printList();

