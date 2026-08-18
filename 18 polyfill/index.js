// =========================================================================
// SECTION 1: THE POLYFILL (Our fallback code for older browsers)
// =========================================================================

// WHY WE CHECK THIS: If the browser already has 'includes', we do not want to overwrite it.
if (!Array.prototype.includes) {
    console.log("Old browser detected! Activating our custom Polyfill adapter...");

    // WHY IT IS USED: We manually add our own custom 'includes' feature to the Array blueprint.
    Array.prototype.includes = function(searchElement) {
        // We use a simple loop to look at every item in the list one by one
        for (let i = 0; i < this.length; i++) {
            if (this[i] === searchElement) {
                return true; // Found the item!
            }
        }
        return false; // Loop finished and item was not there
    };
} else {
    console.log("Modern browser detected! Native 'includes' is already available.");
}


// =========================================================================
// SECTION 2: TESTING THE CODE
// =========================================================================

// WHAT IT DOES: Sets up a standard list of fruits
let fruits = ["Apple", "Banana", "Mango"];

// WHAT IT DOES: Uses the feature to search the array list
console.log(fruits.includes("Banana")); // Prints: true
console.log(fruits.includes("Grapes")); // Prints: false
