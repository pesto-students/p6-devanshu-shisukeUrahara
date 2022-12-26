const getMatchingBracket=(x)=>{
switch(x){
    case "]":return "[";
    case ")": return "(";
    case "}": return "{";
    default: return -1;
}

}

// Time complexity O(N) | SPACE COMPLEXITY O(1)
const paranthesisChecker=(str)=>{
    let result=[];
    result.push(str.charAt(0));
    for(let i=1;i<str.length;i++){
        let currentChar=str.charAt(i);
       let matchingBracket=getMatchingBracket(currentChar);
       let resultLastElement=result[result.length-1];
        if(matchingBracket==resultLastElement){
            result.pop();
        }
        else{
            result.push(currentChar);
        }

    }

    return result.length==0

}

const str1='[]';
const str2='[{}]';
const str3='[({})]';
const str4='[({)]';

console.log(`${str1} is in ${paranthesisChecker(str1)?'Correct':'Incorrect'} order`)
console.log(`${str2} is in ${paranthesisChecker(str2)?'Correct':'Incorrect'} order`)
console.log(`${str3} is in ${paranthesisChecker(str3)?'Correct':'Incorrect'} order`)
console.log(`${str4} is in ${paranthesisChecker(str4)?'Correct':'Incorrect'} order`)
