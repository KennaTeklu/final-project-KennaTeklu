//search
const searchInput = document.getElementById('charity-search');
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  filterCharities(searchTerm);
});

function filterCharities(term) {
  document.querySelectorAll('.charity-card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(term) ? 'block' : 'none';
  });
}

//Validating our form
document.getElementById('volunteer-form').addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  if (!validateEmail(email)) {
    e.preventDefault();
    showError('Please enter a valid email address');
  }
});

// Will fetch charity data first
async function fetchCharities(zipcode) {
  try {
    const response = await fetch(
      `https://api.charitynavigator.org/v2/Organizations?app_id=YOUR_ID&app_key=YOUR_KEY&zip=${zipcode}`
    );
    const data = await response.json();
    renderCharityList(data);
  } catch (error) {
    showError('Failed to load charity data');
  }
}

//Gonna display the results
function renderCharityList(charities) {
  const container = document.getElementById('charity-results');
  container.innerHTML = charities.map(charity => `
    <div class="charity-item">
      <h3>${charity.charityName}</h3>
      <p>${charity.mission}</p>
      <span>Rating: ${charity.currentRating.score}/100</span>
    </div>
  `).join('');
}
