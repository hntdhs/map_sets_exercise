// #1 
{1,2,3,4}
// Why curly brackets?

// #2
"ref"

// #3
0: {Array(3) => true}
1: {Array(3) => false}
// Don't understand this one

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length
// if the set does not have the same length as the array, there is a duplicate - won't this return true if there is a duplicate?

// vowelCount
function isVowel(char){
    return "aeiou".includes(char);
  }
  
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
    }
  }
  return vowelMap;
}
// just need to understand what the 'get' method is doing - don't see it anywhere in notes from videos