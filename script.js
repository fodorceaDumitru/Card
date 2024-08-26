document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById('card-number-input');
    const cardHolderInput = document.getElementById('card-holder-input');
    const cardExpiryMonth = document.getElementById('card-expiry-month');
    const cardExpiryYear = document.getElementById('card-expiry-year');
    const cardCvvInput = document.getElementById('card-cvv-input');

    const cardNumberDisplay = document.getElementById('card-number');
    const cardHolderDisplay = document.getElementById('card-holder');
    const cardExpiryDisplay = document.getElementById('expiry');
    const cardBrand = document.getElementById('card-brand')
    const cvvHolderDisplay = document.querySelector('#cvv > h2');
    const revImgCvv = document.querySelector('.card-brand-rev')
    const cardHolderDisplay2 = document.getElementById('holder');


    cardNumberInput.addEventListener('input', function () {
        cardNumberDisplay.textContent = formatCardNumber(this.value);
        if (this.value.length === 1) {
            switch (this.value[0]) {
                case ('5'):
                    cardBrand.src = "img/card-type/mastercard.png";
                    revImgCvv.src = "img/card-type/mastercard.png"
                    break;
                case ('4'):
                    cardBrand.src = "img/card-type/visa.png";
                    revImgCvv.src = "img/card-type/visa.png"
                    break;
                case ('6'):
                    cardBrand.src = "img/card-type/discover.png";
                    revImgCvv.src = "img/card-type/discover.png"
                    break;
                case ('3'):
                    cardBrand.src = "img/card-type/amex.png";
                    revImgCvv.src = "img/card-type/amex.png"
                    break;
            }
        }
    });
    cardNumberInput.addEventListener('click', () => {
        cardNumberDisplay.classList.add('marking')
        cardHolderDisplay2.classList.remove('marking')
        cardExpiryDisplay.classList.remove('marking')

    })
    cardHolderInput.addEventListener('click', () => {
        cardHolderDisplay2.classList.add('marking')
        cardNumberDisplay.classList.remove('marking')
        cardExpiryDisplay.classList.remove('marking')
    })

    cardHolderInput.addEventListener('input', function () {
        cardHolderDisplay.textContent = this.value.toUpperCase() || "Card Holder";
    });

    cardExpiryMonth.addEventListener('change', updateExpiryDate);
    cardExpiryYear.addEventListener('change', updateExpiryDate);

    cardCvvInput.addEventListener('focus', function () {
        document.querySelector('.card').style.transform = 'rotateY(180deg)';
        document.querySelector('.cardBack').style.transform = 'rotateY(0deg)';
    });

    cardCvvInput.addEventListener('blur', function () {
        document.querySelector('.card').style.transform = 'rotateY(0deg)';
        document.querySelector('.cardBack').style.transform = 'rotateY(180deg)';
    });
    cardCvvInput.addEventListener('input', function () {
        cvvHolderDisplay.innerHTML = cardCvvInput.value

    });

    cardExpiryMonth.addEventListener('click', () => {
        cardExpiryDisplay.classList.add('marking')
        cardNumberDisplay.classList.remove('marking')
        cardHolderDisplay.classList.remove('marking')
    })

    cardExpiryYear.addEventListener('click', () => {
        cardExpiryDisplay.classList.add('marking')
        cardNumberDisplay.classList.remove('marking')
        cardHolderDisplay.classList.remove('marking')
    })


    document.getElementById('card-number-input').addEventListener('input', function () {
        let inputValue = this.value.replace(/\D/g, '');
        let formattedValue = formatCardNumber(inputValue);
        document.getElementById('card-number').textContent = formattedValue;
    });

    function formatCardNumber(value) {
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        while (formattedValue.replace(/\s/g, '').length < 16) {
            if (formattedValue.replace(/\s/g, '').length % 4 === 0 && formattedValue.length > 0) {
                formattedValue += ' ';
            }
            formattedValue += '#';
        }
        return formattedValue
    }

    function updateExpiryDate() {
        const month = cardExpiryMonth.value === "MM" ? "MM" : cardExpiryMonth.value;
        const year = cardExpiryYear.value === "YY" ? "YY" : cardExpiryYear.value;
        cardExpiryDisplay.textContent = `${month}/${year}`;
    }
});