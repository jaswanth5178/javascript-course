// WHY IT IS USED: This is a "Constructor Function". It acts like a blueprint or stamp to quickly create many student objects with the same properties.
function stu (sName,Sage){
    this.name = sName // Assigns the passed name to the new student object
    this.age = Sage   // Assigns the passed age to the new student object
}

// WHY IT IS USED: Prototype allows you to attach a property or method to the blueprint itself. 
// Every student created from this blueprint will share this exact value without wasting extra computer memory.
stu.prototype.gender = "Male"

// WHY IT IS USED: The 'new' keyword runs the blueprint and builds a real object instance for a student named "hammu".
let s1 = new stu("hammu",21)

// WHAT IT DOES: Prints the student object you just created.
console.log(s1); // Prints: stu { name: 'hammu', age: 21 } (Note: gender is hidden inside its prototype background!)

// WHY IT IS USED: To look directly inside the blueprint's shared memory room (the prototype object).
console.log(stu.prototype); // Prints: { gender: 'Male' }

// WARNING EXAMPLE: 
// Instances (like s1) do not have a property named '.prototype'. Only the main function (stu) has that. 
// To look at an instance's prototype link, developers use 's1.__proto__' or 'Object.getPrototypeOf(s1)' instead.
console.log(s1.prototype); // Prints: undefined
