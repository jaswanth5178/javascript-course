// ==========================================
// SCENARIO 1: CLONING / COPYING AN ARRAY
// ==========================================

// WHAT IT DOES: Creates your starting list of numbers.
let a = [1,2,3]

// WHY IT IS USED: The three dots (...) are the "Spread Operator". 
// It unpacks the items out of list 'a' and places them inside a brand new list box 'b'.
// This creates a safe, independent copy. Changing box 'b' will not affect box 'a'.
let b = [...a]

console.log(b); // Prints a perfect copy: [1, 2, 3]


// ==========================================
// SCENARIO 2: COMBINING / MERGING ARRAYS
// ==========================================

// WHAT IT DOES: Creates two separate lists of data.
let aa = [1,2,3]
let bb = [4,5,6]

// WHY IT IS USED: To merge multiple lists into one single long list.
// The dots pull the values out of 'aa' and 'bb' and drop them together into box 'c'.
let c = [...aa,...bb]

console.log(c); // Prints the merged list: [1, 2, 3, 4, 5, 6]
