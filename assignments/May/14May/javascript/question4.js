// Write a function `deepCopy` that accepts an object and returns a deep copy of that object.

// - **Requirements**:
//     - If the object contains nested objects, make sure the nested objects are also copied and not referenced.



function deepCopy(obj){
    let ans = JSON.parse(JSON.stringify(obj))
    return ans

}
const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

const copy = deepCopy(obj);
console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }
