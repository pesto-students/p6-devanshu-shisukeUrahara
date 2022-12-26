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

function getMaxDepthOfSubTree(node,count){

    if(!node){
        return count;
    }

    if(node.left==null && node.right==null){
        return count+1;
    }

    let leftCount=getMaxDepthOfSubTree(node.left,count+1);
    let rightCount=getMaxDepthOfSubTree(node.right,count+1);

    return leftCount>rightCount?leftCount:rightCount;

}

function getMaxDepthOfTree(root){
    if(!root){
        return 0;
    }

    return getMaxDepthOfSubTree(root,0);

}

const arr1=[3,9,20,null,null,15,7];
const arr2=[1,null,2]
const tree1=createTree(arr1);
const tree2=createTree(arr2);


console.log("**@ tree1 , max depth is , ",getMaxDepthOfTree(tree1));
console.log("**@ tree2 , max depth is , ",getMaxDepthOfTree(tree2));