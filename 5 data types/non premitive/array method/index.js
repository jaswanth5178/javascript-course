// WHY IT IS USED: To store a list of multiple items inside one single box (variable).
let a = [1,2,3,4,5]
console.log(a); // Takes a snapshot of the starting array: [1, 2, 3, 4, 5]

// WHY IT IS USED: To add new items to the very end of your list (like adding items to a shopping cart).
let b = a.push(6,7,8)
console.log(a); // Shows the updated array with new items: [1, 2, 3, 4, 5, 6, 7, 8]

// WHY IT IS USED: To remove the last item from a list (like clicking an "Undo" button).
let c = a.pop()
console.log(a); // Shows the array after removing the number 8: [1, 2, 3, 4, 5, 6, 7]

// WHY IT IS USED: To add a new item to the very top/front of a list (like pinning an important message).
let d = a.unshift(0)
console.log(a); // Shows the array with 0 added to the front: [0, 1, 2, 3, 4, 5, 6, 7]

// WHY IT IS USED: To remove the very first item from the front of a list (used in waiting lines or queues).
let e = a.shift()
console.log(a); // Shows the array after removing 0 from the front: [1, 2, 3, 4, 5, 6, 7]

// WHY IT IS USED: To change or modify every item in a list all at once (like doubling prices or changing currencies).
let f = a.map((e)=>e*2)
console.log(f); // Creates a new list where each number is multiplied by 2: [2, 4, 6, 8, 10, 12, 14]

// WHY IT IS USED: To screen out unwanted items and keep only what matches a rule (like filtering products by rating or price).
let g = a.filter((e)=>e>3)
console.log(g); // Creates a new list keeping only numbers bigger than 3: [4, 5, 6, 7]

// WHY IT IS USED: To quickly search and pull out the very first single item that matches a specific rule.
let h = a.find((e)=>e>5)
console.log(h); // Scans the list from left to right and stops at the first number bigger than 5: 6

// WHY IT IS USED: To mathematically combine or add up all items in a list into one single final total.
let i = a.reduce((f,s)=>{
    return f+s
})
console.log(i); // Adds all numbers together (1+2+3+4+5+6+7) and shows the total sum: 28

// WHY IT IS USED: To loop through a list when you need to know the index positions (the seat numbers: 0, 1, 2...).
for (const arr in a) {
    console.log(arr); // Prints the index positions: 0, 1, 2, 3, 4, 5, 6
}

// WHY IT IS USED: To loop through a list when you want to read or display the actual items to a website user.
for (const arr of a) {
    console.log(arr); // Prints the actual numbers stored inside the positions: 1, 2, 3, 4, 5, 6, 7
}

// WHY IT IS USED: To run a block of code for every single item in the list, giving you both the item and its position together.
let j = a.forEach((v,i)=>{
    console.log(`${v}==${i}`); // Prints items and their positions formatted together (e.g., "1==0", "2==1")
})

// WHY IT IS USED: To flip the order of a list backwards (like sorting products from "Newest to Oldest").
let k = a.reverse()
console.log(k); // Flips the main array permanently: [7, 6, 5, 4, 3, 2, 1]

// WHY IT IS USED: To take a list of data and glue them together into one flat block of regular text.
let l = a.join("")
console.log(l); // Smashes the numbers together into a continuous piece of text: "7654321"
