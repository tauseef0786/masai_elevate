// ### **3. Palindrome Check**

// Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same forward and backward).

// - **Requirements**:
//     - Ignore spaces, punctuation, and case differences.


function isPalindrome(s){
    let new_s=""
    for(let i=0;i<s.length;i++){
        let char = s[i].toLowerCase();
         if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
            new_s+=char
         }
    }
    return new_s === new_s.split("").reverse().join("")
}
const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// // Output: true

