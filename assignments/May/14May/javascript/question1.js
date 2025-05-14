// ### **1. Count Vowels and Consonants**

// Write a function `countVowelsAndConsonants` that accepts a string and returns an object with the count of vowels and consonants.

// - **Requirements**:
//     - Ignore spaces and non-alphabetical characters.
//     - Treat both uppercase and lowercase letters as the same.



function countVowelsAndConsonants(s) {
    let vowels = "aeiou"
    let obj = { vowels: 0, consonants: 0 }
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                obj.vowels++
            }
            else{
                obj.consonants++

            }
        }
    }
    return obj
}

const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }
