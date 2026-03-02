console.log("Script started");

//variable to count
let clicks = 0;

//variable to show display
let clickDisplay = document.getElementById("click-display");

//set initial text
clickDisplay.innerText = "Clicks: " + clicks;

//called when potatoes are clicked
function handleClick() {
    console.log("Click");

//add one to click count
clicks = clicks + 1;

//update display
clickDisplay.innerText = "Clicks: " + clicks;
}