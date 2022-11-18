function closestThreeSum(arr, x)
{
     arr.sort();

    let closestSum = Infinity;
 

    for (let i = 0; i < arr.length - 2; i++)
    {

        let j = i + 1;
        let k = arr.length - 1;
 
        while (j < k) {
 
            let sum = arr[i] + arr[j] + arr[k];

            if (Math.abs(x - sum) < Math.abs(x - closestSum))
            {
                closestSum = sum;
            }

            if (sum > x) {
                k--;
            }

            else {
                j++;
            }
        }
    }
 
    return closestSum;
}

const arr = [ -1, 2, 1, -4 ];
let x=1
console.log(closestThreeSum(arr,x));