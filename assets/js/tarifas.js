document.addEventListener('DOMContentLoaded', function() {
    // Modality toggle buttons
    const modalityBtns = document.querySelectorAll('.modality-toggle-btn');
    const pricingCardTexts = document.querySelectorAll('.pricing-card-description');
    const cardCtaBtns = document.querySelectorAll('.card-cta-btn');
    
    // Calculator elements
    const sessionSlider = document.getElementById('session-slider');
    const sessionCountText = document.getElementById('calc-session-count');
    const recommendedLabel = document.getElementById('calc-recommended-label');
    const calcPrice = document.getElementById('calc-total-price');
    const calcSavings = document.getElementById('calc-savings-amount');
    const calcSavingsContainer = document.getElementById('calc-savings-container');
    const calcDescription = document.getElementById('calc-description');
    const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');
    
    let currentModality = 'Presencial'; // Default modality

    // Pricing details for calculator
    const pricingConfig = {
        1: { label: '1 sesión individual', price: 50, original: 50, savings: 0, text: 'Sesión individual suelta.' },
        2: { label: '2 sesiones individuales', price: 100, original: 100, savings: 0, text: 'Pago por sesión.' },
        3: { label: '3 sesiones individuales', price: 150, original: 150, savings: 0, text: 'Pago por sesión.' },
        4: { label: 'Bono de 4 sesiones', price: 180, original: 200, savings: 20, text: 'Ahorro del 10% (pago único).' },
        5: { label: 'Bono de 4 sesiones + 1 sesión', price: 230, original: 250, savings: 20, text: 'Bono 4 sesiones + 1 sesión individual.' },
        6: { label: 'Bono de 4 sesiones + 2 sesiones', price: 280, original: 300, savings: 20, text: 'Bono 4 sesiones + 2 sesiones individuales.' },
        7: { label: 'Bono de 4 sesiones + 3 sesiones', price: 330, original: 350, savings: 20, text: 'Bono 4 sesiones + 3 sesiones individuales.' },
        8: { label: 'Bono de 8 sesiones', price: 340, original: 400, savings: 60, text: 'Ahorro del 15% (pago único, opción recomendada).' },
        9: { label: 'Bono de 8 sesiones + 1 sesión', price: 390, original: 450, savings: 60, text: 'Bono 8 sesiones + 1 sesión individual.' },
        10: { label: 'Bono de 8 sesiones + 2 sesiones', price: 440, original: 500, savings: 60, text: 'Bono 8 sesiones + 2 sesiones individuales.' },
        11: { label: 'Bono de 8 sesiones + 3 sesiones', price: 490, original: 550, savings: 60, text: 'Bono 8 sesiones + 3 sesiones individuales.' },
        12: { label: 'Bono de 8 sesiones + Bono de 4 sesiones', price: 520, original: 600, savings: 80, text: 'Bono 8 sesiones + Bono 4 sesiones (máximo ahorro).' }
    };

    // Update Modality text and links
    function updateModality(modality) {
        currentModality = modality;
        
        // Update toggle UI
        modalityBtns.forEach(btn => {
            if (btn.dataset.modality === modality) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update descriptions inside cards
        pricingCardTexts.forEach(textElem => {
            const cardType = textElem.dataset.cardType;
            if (modality === 'Presencial') {
                if (cardType === 'individual') {
                    textElem.innerHTML = 'Sesión presencial en consulta (Granada, Zaidín).';
                } else if (cardType === 'bono4') {
                    textElem.innerHTML = '4 sesiones presenciales en Granada. Pago único.';
                } else if (cardType === 'bono8') {
                    textElem.innerHTML = '8 sesiones presenciales en Granada. Pago único.';
                }
            } else {
                if (cardType === 'individual') {
                    textElem.innerHTML = 'Sesión online por videollamada segura desde casa.';
                } else if (cardType === 'bono4') {
                    textElem.innerHTML = '4 sesiones online de terapia individual. Pago único.';
                } else if (cardType === 'bono8') {
                    textElem.innerHTML = '8 sesiones online de terapia individual. Pago único.';
                }
            }
        });

        // Update card WhatsApp button links
        cardCtaBtns.forEach(btn => {
            const cardName = btn.dataset.cardName;
            const cardPrice = btn.dataset.cardPrice;
            const message = `Hola Carmen, me gustaría reservar un ${cardName} para terapia ${currentModality} (${cardPrice}).`;
            btn.href = `https://wa.me/34722628237?text=${encodeURIComponent(message)}`;
        });

        // Update calculator state
        updateCalculator();
    }

    // Update session calculator UI
    function updateCalculator() {
        if (!sessionSlider) return;
        
        const count = sessionSlider.value;
        const config = pricingConfig[count];
        
        if (!config) return;

        // Update text numbers
        sessionCountText.textContent = `${count} ${count == 1 ? 'sesión' : 'sesiones'}`;
        recommendedLabel.textContent = config.label;
        calcPrice.textContent = `${config.price} €`;
        calcDescription.textContent = config.text;

        // Update savings block
        if (config.savings > 0) {
            calcSavings.textContent = `${config.savings} €`;
            calcSavingsContainer.classList.remove('hidden');
        } else {
            calcSavingsContainer.classList.add('hidden');
        }

        // Update WhatsApp booking link
        let messageText = `Hola Carmen, he usado la calculadora de tu web y me gustaría reservar la opción de ${count} ${count == 1 ? 'sesión' : 'sesiones'} de terapia ${currentModality}. La combinación recomendada es: ${config.label} por un precio total de ${config.price}€`;
        if (config.savings > 0) {
            messageText += ` (ahorrando ${config.savings}€).`;
        } else {
            messageText += '.';
        }
        calcWhatsappBtn.href = `https://wa.me/34722628237?text=${encodeURIComponent(messageText)}`;
    }

    // Add modality events
    modalityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            updateModality(btn.dataset.modality);
        });
    });

    // Add calculator events
    if (sessionSlider) {
        sessionSlider.addEventListener('input', updateCalculator);
        sessionSlider.addEventListener('change', updateCalculator);
    }

    // Initialize UI
    updateModality('Presencial');
});
