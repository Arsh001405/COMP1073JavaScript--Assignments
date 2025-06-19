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

// ===== Step 4: Display the full story based on current selections =====
function showStory() {
  // Combine all selected parts into a full sentence
  const story = selected.map((s, i) => options[i][s]).join(' ');
  // Show the story in the result paragraph
  document.getElementById("result").textContent = "Story: " + story + "!";
  // Optionally speak the story aloud
  speakStory(story);
}

// ===== Step 5: Generate a random story by selecting random options =====
function generateRandomStory() {
  for (let i = 0; i < selected.length; i++) {
    // Pick a random index for each part
    selected[i] = Math.floor(Math.random() * options[i].length);
    // Update button text to reflect the random choice
    document.getElementById(`part${i}`).textContent = options[i][selected[i]];
  }
  // Display the new random story
  showStory();
}

// ===== Step 6: Reset the story selections and UI to default state =====
function resetStory() {
  // Reset selected indices to 0 for all parts
  selected = [0, 0, 0, 0, 0];
  // Reset button text to "---"
  for (let i = 0; i < selected.length; i++) {
    document.getElementById(`part${i}`).textContent = "---";
  }
  // Clear the story display
  document.getElementById("result").textContent = "";
}

// ===== Step 7: Use speech synthesis to read the story aloud =====
function speakStory(story) {
  const utterance = new SpeechSynthesisUtterance(story);
  speechSynthesis.speak(utterance);
}
