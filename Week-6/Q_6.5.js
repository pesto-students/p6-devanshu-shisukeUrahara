// Time complexity O(N) | Space complexity O(1)
const doesPairWithGivenDifferenceExists=(arr,diff)=>{
    const map = new Map();

    for(let i=0;i<arr.length;i++){
        let temp=Math.abs(diff-arr[i]);
        if(map.has(temp)){
            return true;
        }
        else{
            map.set(arr[i],true);
        }
    }

    return false

}

const arr=[5,10,3,2,50,80];

console.log("**@ result 1 is , ",doesPairWithGivenDifferenceExists(arr,46))