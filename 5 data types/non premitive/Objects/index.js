// ==========================================
// SECTION 1: LITERAL OBJECT CREATION
// ==========================================

// WHY IT IS USED: The most common and simple way to store multiple details about a person/thing in one clean variable.
// let emp = {
//     eName:"Srinu",
//     eAge:22,
//     ePlace:"Kadapa"
// }
// console.log(emp);

// WHY IT IS USED: Displays your data cleanly in a beautiful visual grid table instead of a raw list text.
// console.table(emp)

// WHY IT IS USED: To check the computer data type. It will return "object".
// console.log(typeof emp);

// WHY IT IS USED: Using Dot Notation (.) to pull out and use just one specific property value.
// console.log(emp.eName); // Prints: Srinu

// WHY IT IS USED: To inject a brand new property key-value pair into an already existing object.
// emp.epin = 560001
// console.log(emp);


// ==========================================
// SECTION 2: NESTED OBJECTS (OBJECT INSIDE OBJECT)
// ==========================================

// WHY IT IS USED: To group related sub-details inside an object (like grouping State and City inside a Place box).
// let stu = {
//     sName:"azfar",
//     sage:"17",
//     sPlace:{
//         sState:"Andhra pradesh",
//         sCity:"nellore"
//     }
// }

// WHY IT IS USED: To drill down into a nested object and add a new property inside that specific sub-folder box.
// stu.sPlace.sPin = 560001
// console.log(stu);

// WHY IT IS USED: To drill down deep and grab a single value tucked inside the inner object box.
// console.log(stu.sPlace.sPin); // Prints: 560001


// ==========================================
// SECTION 3: OBJECT CONSTRUCTOR FUNCTION
// ==========================================

// WHY IT IS USED: Acts like a reusable blueprint or stamp to quickly create many objects with identical property setups.
// function emp(name,age){
//     this.name = name
//     this.age = age
// }

// WHY IT IS USED: The 'new' keyword uses the stamp blueprint to generate two independent real copies (instances).
// let e1 = new emp("Shahsank",24)
// let e2 = new emp("Suraj",23)
// console.log(e1);
// console.log(e2);


// ==========================================
// SECTION 4: THE NEW OBJECT() METHOD
// ==========================================

// WHY IT IS USED: An alternative, formal way to initialize a blank object wrapper using the built-in JavaScript system.
let emp = new Object()

// WHY IT IS USED: To assign properties and build up data inside your newly created blank object wrapper step by step.
emp.eName = "hammu"
emp.eAge = 25
emp.ePlace="nellore"

// WHAT IT DOES: Prints the finished object containing all the properties you just added manually.
console.log(emp); // Prints: { eName: 'hammu', eAge: 25, ePlace: 'nellore' }
