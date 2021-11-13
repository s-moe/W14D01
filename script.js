const checkPalindrome = (string) => {
  const word = string.toLowerCase();
  const reverseStr = word.split("").reverse().join("");
  // console.log(word)
  // console.log(reverseStr)

  return word === reverseStr;

  
  // if (word === reverseStr) {
  // console.log(true)
  // } else {
  //   console.log (false)
  // }
  // return true;
  // let word = string.toLowerCase();
  // return word === word.split("").reverse().join("");
  
  // console.log(word)
  
};

// console.log(checkPalindrome("Eye"))

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }
  return sum
}
console.log(sumArray([1, 2, 3]))
