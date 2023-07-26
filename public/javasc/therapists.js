const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const setAvailabilityBtn = document.getElementById('set-availability-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');
const form = document.querySelector('form');
const dateInput = document.getElementById('availability-date');
const timeCheckboxes = document.querySelectorAll('input[name="availability-time"]');

// Show the modal when the "Set Availability" button is clicked
setAvailabilityBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Hide the modal when the "x" button is clicked or anywhere outside the modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
    if (event.target === modal) {
    modal.style.display = 'none';
    }
    });
    
    // Save the selected date and time slots when the form is submitted
    // form.addEventListener('submit', function(event) {
    // event.preventDefault();
    
    // const selectedDate = dateInput.value;
    // const selectedTimes = [];
    
    // timeCheckboxes.forEach(function(checkbox) {
    // if (checkbox.checked) {
    // selectedTimes.push(checkbox.value);
    // }
    // });
    
    // console.log('Selected Date:', selectedDate);
    // console.log('Selected Times:', selectedTimes);
    
    // modal.style.display = 'none';
    // });
    
    // Show the modal when the "Set Availability" button is clicked
    // setAvailabilityBtn.addEventListener('click', function() {
    // modal.style.display = 'block';
    // });