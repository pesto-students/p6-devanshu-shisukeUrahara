const {Node,LinkedList} = require('./LinkedList');

const rotateLinkedList=(list,n,k)=>{

    if(k>n){
        return;
    }
    let head=list.head;
    let currentNode=list.head;
    let i=1;
    
    while(i<k){
        currentNode=currentNode.next;
        i++;
    }
   
    let newHeadNode=currentNode.next;
    list.head=newHeadNode;
    currentNode.next=null;
    while(newHeadNode.next){
        newHeadNode=newHeadNode.next;
        i++
    }
    newHeadNode.next=head;

}


const node1= new Node(2);
const node2= new Node(4);
const node3= new Node(7);
const node4= new Node(8);
const node5= new Node(9);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

const list=new LinkedList(node1);
list.printList();
console.log("***********************************************")
rotateLinkedList(list,5,3);
list.printList();

