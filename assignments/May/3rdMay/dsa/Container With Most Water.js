// Problem: Given an array height of non-negative integers, find two lines that 
// together with the x-axis form a container, such that the container contains the most water.

// Input:
// height = [1,8,6,2,5,4,8,3,7]

// Output: 49



function maxArea(height){
    let left=0
    let right=height.length-1
    let max_area=0
    while(left<right){
        const w =right-left;
        const ht = Math.min(height[left], height[right]);
        const currentArea = w * ht;
        max_area = Math.max(max_area, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }
    return max_area;
}

height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))