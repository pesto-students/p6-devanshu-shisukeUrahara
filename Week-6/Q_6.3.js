const sortZeroesOnesAndTwos= (arr)=>{
    const map= new Map();

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            let currentCount= map.get(arr[i]);
            map.set(arr[i],currentCount+1);
        }
        else{
            map.set(arr[i],1);
        }
    }

    let lastCount=0;
    for(let i=0;i<=2;i++){
        let currentCount= map.get(i);
        let j=0;
        for(j=lastCount;j<lastCount+currentCount;j++){
            arr[j]=i;
        }

        lastCount=j;
    }
}


const arr=[1,2,0,0,1,2,0,1,0,1,2];

console.log("**@ before arr is , ",arr);
sortZeroesOnesAndTwos(arr);
console.log("**@ after arr is , ",arr);
