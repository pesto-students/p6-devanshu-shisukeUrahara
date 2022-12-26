//  next greater element
//  Time Complexity O(N) | Space Complexity O(N)
const nextGreaterElement= (arr)=>{
    let stack=[];
    let result=[];

    for(let i=0;i<arr.length;i++){
        let currentElement={index:i,value:arr[i]};

        if(stack.length==0){
            stack.push(currentElement);
            continue;
        }

        while(stack.length>0 && currentElement.value>stack[stack.length-1].value ){
            let poppedEl=stack.pop();
            result[poppedEl.index]=currentElement.value;
        }

        stack.push(currentElement)

    }

    while(stack.length>0){
        let poppedElement= stack.pop();
        result[poppedElement.index]=-1;
    }


    return result;


}


let arr1=[1,3,4,5];
console.log("**@ arr1 result is , ",nextGreaterElement(arr1));
let arr2=[1,3,4,5,9,8,3,5];
console.log("**@ arr1 result is , ",nextGreaterElement(arr2));
