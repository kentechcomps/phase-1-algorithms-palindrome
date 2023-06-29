console.log(isPalindrome('Kenchez'));
function isPalindrome(word) {
  // Write your algorithm here
  const refinedword = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversedword = refinedword.split('').reverse().join('')

  return reversedword === word  
}

/* 
  Add your pseudocode here
  *first we have to create a functioncalled isPalindrome
  * we will convert our string into array of characters
  * then do a reverse method to them
  * you will reverse the array into strings
  * then return result
  * 
*/

/*
  Add written explanation of your solution here
  We have created a function calledd isPalindrome which returns word.In the function we created a variable called
  refined word which will store the string which has been converted into lowercase
  we will then perform a reverse operation 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
