const dateSlot = document.querySelectorAll(".dateSlot");
const timeSlot = document.querySelectorAll(".timeSlot");

// Add event listeners for date options
for (let i = 0; i < dateSlot.length; i++) {
  dateSlot[i].addEventListener("click", function() {
    // Remove selected class from all date options
    for (let j = 0; j < dateSlot.length; j++) {
      dateSlot[j].classList.remove("selected");
    }
    // Add selected class to clicked date option
    this.classList.add("selected");
  });
}

// Add event listeners for time slots
for (let i = 0; i < timeSlot.length; i++) {
  timeSlot[i].addEventListener("click", function() {
    // Remove selected class from all time slots
    for (let j = 0; j < timeSlot.length; j++) {
      timeSlot[j].classList.remove("selected");
    }
    // Add selected class to clicked time slot
this.classList.add("selected");
});
}





