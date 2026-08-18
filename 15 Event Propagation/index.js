// 1. Grab all three nested container nodes
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// 2. Set up Bubbling listeners (Default behavior: False flag)
// Events travel from the innermost clicked element outwards to parents.
grandparent.addEventListener('click', (e) => {
    console.log("💥 Grandparent Box Clicked! (Bubbling Phase)");
}, false);

parent.addEventListener('click', (e) => {
    console.log("🔷 Parent Box Clicked! (Bubbling Phase)");
}, false);

child.addEventListener('click', (e) => {
    console.log("🔺 Child Box Clicked! (Bubbling Phase)");
    
    // TIP: Un-comment the line below to freeze propagation at the child element!
    // e.stopPropagation(); 
}, false);
