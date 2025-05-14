// ### **2. Reverse Words in a String**
// Write a function `reverseWords` that takes a string, and returns the string with each word reversed, while keeping the word order the same.
// - **Requirements**:
//     - Consider words to be separated by spaces.

// **Example**:




function reverseWords(s) {
    let ns = s.split(" ")
    // return ns 
    let res=[]
    for (let i = 0; i < ns.length; i++) {
        let revword=""
        for(let j=ns[i].length-1;j>=0;j--){
            revword+=ns[i][j]

        }
        res.push(revword)
    }
    return res.join(" ")

}


const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"
