class TreeNode
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertIntoTree(i, arr)
{
  let curr = null;
  if(i < arr.length)
  {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2*i + 1, arr);
    curr.right = insertIntoTree(2*i + 2, arr);
  }
  return curr;
}

function createTree(arr)
{
  return insertIntoTree(0, arr);
}

function levelOrderTraversal(rootNode){
    const result=[];
    if(rootNode==null){
        return result;
    }

    const stack=[];
    stack.push(rootNode);
    result.push([rootNode.value])

    while(stack.length>0){
        let currentNode=stack.shift();

        let temp=[];
        if(currentNode.left && currentNode.left.value){
            stack.push(currentNode.left);
            temp.push(currentNode.left.value);
        }
        if(currentNode.right && currentNode.right.value){
            stack.push(currentNode.right);
            temp.push(currentNode.right.value);
        }
        if(temp.length>0){
            result.push(temp)
        }
    }

    return result;

}

const arr1=[3,9,20,null,null,15,7];
const arr2=[1]
const tree1=createTree(arr1);
const tree2=createTree(arr2);


console.log("**@ tree1 , level order traversal is , ",levelOrderTraversal(tree1));
console.log("**@ tree2 , level order traversal is , ",levelOrderTraversal(tree2));