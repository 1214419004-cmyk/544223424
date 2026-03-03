console.log("Script started");

//variable to count
let clicks = 0;

//variable to show display
let clickDisplay = document.getElementById("click-display");

//click value
let clickValue = 1

//set initial text
clickDisplay.innerText = "Clicks: " + clicks;

//called when potatoes are clicked
function handleClick() {
    console.log("Click");

    //add one to click count
    clicks = clicks + clickValue;

    //update display
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10){
        alert("You have leveled up! Your clicks are now worth 2");
        
    }


}

