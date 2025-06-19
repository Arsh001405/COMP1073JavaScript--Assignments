// ===== Step 1: Define story parts options =====
const options = [
  ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"],  // Part 1 options
  ["sat on", "danced with", "saw", "doesn't like", "kissed"],                       // Part 2 options
  ["a funny", "a scary", "a slimy", "a barking", "a fat"],                           // Part 3 options
  ["goat", "monkey", "cow", "frog", "bug", "worm"],                                 // Part 4 options
  ["on the moon", "on the chair", "in my spaghetti", "in my soup", "in my shoes"]    // Part 5 options
];

// ===== Step 2: Track currently selected indices for each part =====
let selected = [0, 0, 0, 0, 0];

// ===== Step 3: Cycle through options for a specific story part =====
function cycleOption(partIndex) {
  // Increment the selected index for this part, wrapping around if at the end
  selected[partIndex] = (selected[partIndex] + 1) % options[partIndex].length;
  // Update the button text to show the currently selected option
  document.getElementById(`part${partIndex}`).textContent = options[partIndex][selected[partIndex]];
}