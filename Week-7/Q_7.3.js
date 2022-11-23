const {Node,LinkedList} = require('./LinkedList');
// Time complexity O(N) | SPACE COMPLEXITY O(1)
const doesLoopExistInList=(list)=>{

    let slowHead=list.head;
    let fastHead=list.head;

    while(slowHead!==null && fastHead!==null && fastHead.next!==null){
        slowHead=slowHead.next;
        fastHead=fastHead.next.next;

        if(slowHead==fastHead){
            return true;
        }
    }
    return false;
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
// node5.next=node3

const list=new LinkedList(node1);
console.log("***********************************************")
console.log("**@ loop exist , ",doesLoopExistInList(list))

