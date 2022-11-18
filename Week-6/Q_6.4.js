const maxProfit = function(prices) {

    let current =prices[prices.length-1];
    let max=prices[prices.length-1];
    let diff=prices[prices[prices.length-1]];
    let result=0;

    for(let i=prices.length-2;i>=0;i--){
        current=prices[i];
        diff=max-current;

        if(diff>result){
            result=diff;
        }

        if(current>max){
            max=current;
        }

    }

    return result;
    
};

const arr=[7,1,5,3,6,4,21];

console.log(maxProfit(arr));