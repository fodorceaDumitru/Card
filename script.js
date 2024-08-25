document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById('card-number-input');
    const cardHolderInput = document.getElementById('card-holder-input');
    const cardExpiryMonth = document.getElementById('card-expiry-month');
    const cardExpiryYear = document.getElementById('card-expiry-year');
    const cardCvvInput = document.getElementById('card-cvv-input');

    const cardNumberDisplay = document.getElementById('card-number');
    const cardHolderDisplay = document.getElementById('card-holder');
    const cardExpiryDisplay = document.getElementById('card-expiry');

    cardNumberInput.addEventListener('input', function () {
        cardNumberDisplay.textContent = formatCardNumber(this.value);
    });

    cardHolderInput.addEventListener('input', function () {
        cardHolderDisplay.textContent = this.value || "Card Holder";
    });

    cardExpiryMonth.addEventListener('change', updateExpiryDate);
    cardExpiryYear.addEventListener('change', updateExpiryDate);

    cardCvvInput.addEventListener('focus', function () {
        document.querySelector('.card').style.transform = 'rotateY(180deg)';
    });

    cardCvvInput.addEventListener('blur', function () {
        document.querySelector('.card').style.transform = 'rotateY(0deg)';

    });

    function formatCardNumber(value) {
        return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    function updateExpiryDate() {
        const month = cardExpiryMonth.value === "MM" ? "MM" : cardExpiryMonth.value;
        const year = cardExpiryYear.value === "YY" ? "YY" : cardExpiryYear.value;
        cardExpiryDisplay.textContent = `${month}/${year}`;
    }
});