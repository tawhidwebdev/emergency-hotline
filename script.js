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
      // Call History List Update
      const cardHeading = card.querySelector('.card-heading').textContent;
      const phoneNumber = card.querySelector('.phone-number').textContent;
      const date = new Date().toLocaleTimeString();
      const callHistoryList = document.getElementById('call-history-list');
      const listItem = document.createElement('div');
      listItem.innerHTML = `<li class="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg">
                              <div class="flex flex-col gap-y-1">
                                <span class="text-[#111]">${cardHeading}</span>
                                <span class="text-[#5C5C5C]">${phoneNumber}</span>
                              </div>
                              <span class="text-[#111]">${date}</span>
                            </li>`;
      callHistoryList.appendChild(listItem);
    } else {
      alert('আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
    }
  });
});

// Copy Button Click Functionality
const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');

    const phoneNumber = card.querySelector('.phone-number');
    const copyCount = document.getElementById('copy-count');

    if (phoneNumber) {
      navigator.clipboard.writeText(phoneNumber.textContent).then(() => {
        alert(`নাম্বার কপি হয়েছে: ${phoneNumber.textContent}`);
        // Update Copy Count
        let currentCopyCount = parseInt(copyCount.textContent);
        currentCopyCount++;
        copyCount.textContent = currentCopyCount;
      });
    }
  });
});

// Call History Clear Button Functionality
const callHistoryClearBtn = document.getElementById('call-history-clear-btn');
const callHistoryList = document.getElementById('call-history-list');
callHistoryClearBtn.addEventListener('click', () => {
  callHistoryList.innerHTML = '';
});