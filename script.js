// Heart Icon Click Functionality
const cardHeartIcon = document.querySelectorAll('.heart-icon-card');
const globalHeartCount = document.getElementById('global-heart-count');

const likedCards = new Set();

cardHeartIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    const card = icon.closest('.card');
    const cardId = card.dataset.cardId;

    if (!likedCards.has(cardId)) {
      let currentGlobalCount = parseInt(globalHeartCount.textContent);
      currentGlobalCount++;
      globalHeartCount.textContent = currentGlobalCount;

      likedCards.add(cardId);

      icon.classList.add('text-red-600');

      icon.style.pointerEvents = 'none';
    }
  });
});

// Calling Button Click Functionality
const callingButtons = document.querySelectorAll('.calling-btn');
const coinCounts = document.getElementById('coin');

callingButtons.forEach(button => {
  button.addEventListener('click', () => {
   
    const card = button.closest('.card');

    const cardSubHeading = card.querySelector('.card-sub-headig');
    const phoneNumber = card.querySelector('.phone-number');

    alert(
      `Calling: ${cardSubHeading ? cardSubHeading.textContent : ''} ${phoneNumber ? phoneNumber.textContent : ''}...`
    );

    let currentCoinCount = parseInt(coinCounts.textContent);
    if (currentCoinCount >= 20) {
      currentCoinCount -= 20;
      coinCounts.textContent = currentCoinCount;
    } else {
      alert('No more coins left!');
    }
  });
});


