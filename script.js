// Prompt the user for a list of froyo flavors they'd like to try.
const flavorList = prompt("Enter a list of comma-separated flavors:", "vanilla, vanilla, vanilla, strawberry, strawberry, coffee, coffee");

// Convert the string into an array, and log the array.
const flavors = flavorList.split(", ");

// Create a function called `counter` that accepts an array and a single item as arguments.
const flavorCounter = counterFlavors(flavors);

// Display the order breakdown in the console
console.table(flavorCounter);

// Create a function called `counterFlavors` that accepts an array and returns an object.
function counterFlavors(flavors) {
    const counter = {};
    
    // Iterate through the array of flavors
    for (const flavor of flavors) {
        // Update the flavor count in the object
        if (counter[flavor] === undefined) {
            counter[flavor] = 1;
        } else {
            counter[flavor]++;
        }
    }

    return counter;
}