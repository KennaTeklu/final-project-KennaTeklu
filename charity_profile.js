// charity_profile.js

// Volunteer Now Button Handler
const volunteerButton = document.querySelector('.volunteer-now-btn');
const volunteerForm = document.getElementById('volunteer-form');

if (volunteerButton) {
  volunteerButton.addEventListener('click', () => {
    volunteerForm.style.display = volunteerForm.style.display === 'none' ? 'block' : 'none';
  });
}
// Basic Form Validation
const form = document.querySelector('#volunteer-form form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }
  // Show confirmation
  if (confirm('Submit volunteer application?')) {
    alert('Thank you for volunteering! We\'ll contact you soon.');
    form.reset();
    volunteerForm.style.display = 'none';
  }
});
// Additional Interactive Element: Volunteer Counter
const counter = document.getElementById('volunteer-counter');
let count = 0;

function updateCounter() {
  count++;
  counter.textContent = `${count} volunteers joined recently!`;
}
// Update counter on form submission
form.addEventListener('submit', updateCounter);
