// WHY IT IS USED: To group related details about a single entity (like an employee) into one organized package.
let emp = {
    eName:"Jaswanth",
    eid:222,
    ePlace:"Kadapa"
}

// WHY IT IS USED: To lock the structure of an object. It stops anyone from adding new keys or deleting old ones, but still lets you change the values of existing keys.
Object.seal(emp)

// WHY IT IS USED: (Currently turned off) Hard-locks the object completely. It prevents adding, deleting, OR changing any values at all.
// Object.freeze(emp)

// WHAT IT DOES: Changes an existing key. This works because Object.seal allows you to modify existing data.
emp.eName = "Jaswanth"

// WHAT IT DOES: Tries to add a brand new key 'epin'. 
// WHY IT FAILS: Because the object is sealed, JavaScript will quietly ignore this line. 'epin' will NOT be added!
emp.epin = 560001

// WHY IT IS USED: To check if an object is completely frozen (returns true or false).
let a = Object.isFrozen(emp)
console.log(a); // Prints: false (because we used seal, not freeze)

// WHY IT IS USED: To check if an object's structure is locked using seal (returns true or false).
let b = Object.isSealed(emp)
console.log(b); // Prints: true

// WHAT IT DOES: Prints the final state of the employee object.
console.log(emp); // Prints: { eName: "Jaswanth", eid: 222, ePlace: "Kadapa" } (No epin!)

// WHY IT IS USED: To pull out all the key names (labels) from the object into a simple list array.
console.log(Object.keys(emp)); // Prints: ['eName', 'eid', 'ePlace']

// WHY IT IS USED: To pull out all the actual values (data) from the object into a simple list array.
console.log(Object.values(emp)); // Prints: ['Jaswanth', 222, 'Kadapa']

// WHY IT IS USED: To break down the object into a list of pairs containing both the key and the value together.
console.log(Object.entries(emp)); // Prints: [ ['eName', 'Jaswanth'], ['eid', 222], ['ePlace', 'Kadapa'] ]
