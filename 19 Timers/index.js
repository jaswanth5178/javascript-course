// ==========================================
// SECTION 1: SETTIMEOUT (ONCE-OFF DELAY)
// ==========================================

// WHY IT IS USED: To execute a block of code exactly ONCE after waiting for a specified delay time.
// setTimeout(()=>{
//     document.write("Thank you")
// },2000) // 2000 milliseconds = 2 seconds delay.


// ==========================================
// SECTION 2: SETINTERVAL (REPEATING LOOP)
// ==========================================

// WHY IT IS USED: To continuously repeat a block of code over and over again at regular time gaps (like an alarm clock ticking).
// setInterval(()=>{
//     document.writeln("Thank you for everyone")
// },2000) // Repeatedly fires every 2 seconds until stopped.


// ==========================================
// SECTION 3: ASYNCHRONOUS TIMING EXPERIMENT
// ==========================================

// WHAT IT DOES: Registers a 1-second delay task with the browser's background timer engine.
setTimeout(()=>{
    console.log("A");
},1000)

// WHAT IT DOES: Instantly outputs text to the console without any delay.
console.log("B");

// WHAT IT DOES: Instically outputs text right after line 18.
console.log("c");
