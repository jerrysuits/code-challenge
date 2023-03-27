// Get references to HTML elements
const speedInput = document.querySelector(".speed");
const messageDisplay = document.querySelector(".message");

// Add event listener to speed input field
speedInput.addEventListener("input", function() {
  const speed = parseInt(speedInput.value);  
  if (isNaN(speed)) {  
    messageDisplay.value = "";
    return;
  }
  if (speed < 70) {  
    messageDisplay.value = "Ok";
  } else {  
    const demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {  
      messageDisplay.value = "License suspended";
    } else {  
      messageDisplay.value = "Points: " + demeritPoints;
    }
  }
});
