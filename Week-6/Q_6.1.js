// Time complexity Object(N) | Space complexity O(1)
const maxContiguousDSubArray= (arr)=>{
    let maxSum=-Infinity;
    let currentSum=0;

    for(let i=0;i<arr.length;i++){
        currentSum= currentSum+arr[i];

        if(currentSum>maxSum){
            maxSum=currentSum;
        }

        if(currentSum<0){
            currentSum=0;
        }

    }

    return maxSum
}

const arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
const arr2=[1,2,3,4,-10];
const arr3= [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxContiguousDSubArray(arr));
console.log(maxContiguousDSubArray(arr2));
console.log(maxContiguousDSubArray(arr3));
