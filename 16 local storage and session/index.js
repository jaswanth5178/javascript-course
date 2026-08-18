// ==========================================
// SECTION 1: LOCAL STORAGE (Permanent Save)
// ==========================================

// WHY IT IS USED: To save data permanently inside the browser (like user settings or theme choices).
localStorage.setItem("username", "Azfar");

// WHY IT IS USED: To grab and read the permanently saved data back out of the browser memory.
let savedUser = localStorage.getItem("username");
console.log("Local Storage data found:", savedUser); // Prints: Azfar


// ==========================================
// SECTION 2: SESSION STORAGE (Temporary Save)
// ==========================================

// WHY IT IS USED: To save data temporarily. This data vanishes automatically when you close the tab (like a temporary shopping cart token).
sessionStorage.setItem("sessionID", "12345XYZ");

// WHY IT IS USED: To grab and read the temporary session data back out of memory.
let savedSession = sessionStorage.getItem("sessionID");
console.log("Session Storage data found:", savedSession); // Prints: 12345XYZ


// ==========================================
// SECTION 3: HOW TO DELETE REQUERIED DATA
// ==========================================

// WHAT IT DOES: Removes one specific item from the storage box.
// localStorage.removeItem("username");

// WHAT IT DOES: Wipes out absolutely everything saved in that storage box.
// localStorage.clear();
