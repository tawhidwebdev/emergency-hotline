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