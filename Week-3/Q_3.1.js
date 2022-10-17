const cache = new Map();
function memoize(fn){

   return function(){
    const key = JSON.stringify(arguments);

    if(cache.has(key)){
        return cache.get(key);
    }
    else{
        console.time();
        let sum=0;
        for(let i=0;i<arguments.length;i++){
            sum=fn(sum,arguments[i]);
        }
        cache.set(key,sum); ;
        console.timeEnd();
        return sum;


    }

   }
  
}




//Given reducer method:
function add(a,b){
    return a+b;
}
//Create a method called memoize such that:
const memoizeAdd=memoize(add);
// //then calling...
console.log("**@ result 1 is , ",memoizeAdd(100,100));//returns 200
console.log("**@ result 2 is , ",memoizeAdd(100));//returns 100
console.log("**@ result 3 is , ",memoizeAdd(100,200))//returns 300
console.log("**@ result 4 is , ",memoizeAdd(100,100))//returns 200 
