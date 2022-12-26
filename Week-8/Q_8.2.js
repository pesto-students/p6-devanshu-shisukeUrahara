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

function validateBinaryTree(root){
    if(!root){
        return true;
    }

    if(root.left && root.left.value>root.value){
        return false;
    }

    if(root.right && root.right.value<root.value){
        return false;
    }

    return validateBinaryTree(root.left) && validateBinaryTree(root.right);

}

const arr1=[2,1,3];
const arr2=[5,1,4,null,null,3,6]
const tree1=createTree(arr1);
const tree2=createTree(arr2);


console.log("**@ tree1 , validation is , ",validateBinaryTree(tree1));
console.log("**@ tree2 ,validation is , ",validateBinaryTree(tree2));