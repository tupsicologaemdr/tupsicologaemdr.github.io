---
layout: page
title: Tarifas
subtitle: Terapia adaptada a tus necesidades
---

<div class="pricing-section">

    <!-- Selector de Modalidad -->
    <div class="modality-selector-container">
        <p class="modality-selector-title">Selecciona la modalidad de tu terapia:</p>
        <div class="modality-selector">
            <button type="button" class="modality-toggle-btn active" data-modality="Presencial">📍 Presencial (Granada)</button>
            <button type="button" class="modality-toggle-btn" data-modality="Online">💻 Online (Videollamada)</button>
        </div>
    </div>

    <!-- Tarjetas de Tarifas -->
    <div class="pricing-cards">
        <div class="pricing-card">
            <h3>Sesión Individual</h3>
            <div class="price">50 €</div>
            <p class="pricing-card-description" data-card-type="individual">Sesión presencial en consulta (Granada, Zaidín).</p>
            <a href="#" class="btn btn-outline card-cta-btn" data-card-name="Sesión Individual" data-card-price="50 €">Reservar Sesión</a>
        </div>

        <div class="pricing-card highlighted">
            <span class="badge-recommended">Más popular</span>
            <h3>Bono 4 sesiones</h3>
            <div class="price">180 €</div>
            <p class="pricing-discount">Descuento 10 % (Ahorras 20 €)</p>
            <p class="pricing-card-description" data-card-type="bono4">4 sesiones presenciales en Granada. Pago único.</p>
            <a href="#" class="btn btn-primary card-cta-btn" data-card-name="Bono 4 sesiones" data-card-price="180 €">Reservar Bono 4</a>
        </div>

        <div class="pricing-card">
            <h3>Bono 8 sesiones</h3>
            <div class="price">340 €</div>
            <p class="pricing-discount">Descuento 15 % (Ahorras 60 €)</p>
            <p class="pricing-card-description" data-card-type="bono8">8 sesiones presenciales en Granada. Pago único.</p>
            <a href="#" class="btn btn-outline card-cta-btn" data-card-name="Bono 8 sesiones" data-card-price="340 €">Reservar Bono 8</a>
        </div>
    </div>

    <!-- Nota Informativa -->
    <div class="pricing-note">
        <p>
            <strong>Primera consulta:</strong> La primera sesión está dedicada a conocernos y valorar
            si podemos trabajar juntos. Es un espacio para que me cuentes tu situación y yo pueda
            explicarte cómo podría ayudarte.
        </p>
    </div>

    <!-- Calculadora de Sesiones e Interactividad -->
    <div class="calculator-section">
        <h2 class="section-title">Calculadora de Ahorro y Plan Recomendado</h2>
        <p class="calculator-intro">¿Sabes cuántas sesiones estimas realizar o quieres planificar tu presupuesto? Desliza el control para ver la combinación recomendada de sesiones y tu ahorro obtenido frente al precio individual.</p>
        
        <div class="calculator-grid">
            <div class="calculator-inputs">
                <label for="session-slider" class="slider-label">
                    Número de sesiones estimado:
                </label>
                <div class="slider-value-display" id="calc-session-count">1 sesión</div>
                
                <div class="range-slider-wrapper">
                    <input type="range" id="session-slider" min="1" max="12" value="1" step="1" class="custom-slider">
                    <div class="slider-ticks">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                    </div>
                </div>
            </div>
            
            <div class="calculator-outputs">
                <div class="output-card">
                    <div class="output-row">
                        <span class="output-title">Combinación recomendada:</span>
                        <span class="output-value" id="calc-recommended-label">1 sesión individual</span>
                    </div>
                    <div class="output-row main-price-row">
                        <span class="output-title">Precio total estimado:</span>
                        <span class="output-value price-highlight" id="calc-total-price">50 €</span>
                    </div>
                    <div class="output-row savings-row hidden" id="calc-savings-container">
                        <span class="output-title">Ahorro conseguido:</span>
                        <span class="output-value savings-highlight" id="calc-savings-amount">0 €</span>
                    </div>
                    
                    <p class="output-detail" id="calc-description">Sesión individual suelta.</p>
                    
                    <a href="#" target="_blank" rel="noopener" class="btn btn-primary btn-full" id="calc-whatsapp-btn">
                        <span>💬</span> Solicitar esta opción por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Cargar Script de Interactividad -->
<script src="{{ '/assets/js/tarifas.js' | relative_url }}"></script>
