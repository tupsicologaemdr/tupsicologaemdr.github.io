---
layout: page
title: Contacto
subtitle: Da el primer paso hacia tu bienestar
---

<div class="contact-content">
    <div class="contact-intro">
        <p>
            Entiendo que pedir ayuda puede ser difícil. Estoy aquí para escucharte y acompañarte
            en tu proceso. Puedes contactarme por el medio que te resulte más cómodo.
        </p>
    </div>

    <div class="contact-grid">
        <div class="contact-form-section">
            <h2>Envíame un mensaje</h2>

            <form action="https://formspree.io/f/xpwynpyw" method="POST" class="contact-form">
                <div class="form-group">
                    <label for="name">Nombre *</label>
                    <input type="text" id="name" name="name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone">
                </div>

                <div class="form-group">
                    <label for="modality">Modalidad preferida</label>
                    <select id="modality" name="modality">
                        <option value="">Selecciona una opción</option>
                        <option value="presencial">Presencial</option>
                        <option value="online">Online</option>
                        <option value="indiferente">Me es indiferente</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Cuéntame brevemente qué te trae aquí *</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="privacy" required>
                        He leído y acepto la <a href="/privacidad">política de privacidad</a> *
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Enviar mensaje</button>
            </form>
        </div>

        <div class="contact-info-section">
            <h2>Información de contacto</h2>

            <div class="contact-info">
                <div class="info-item">
                    <h3>📍 Ubicación</h3>
                    <p>Zaidín, Granada</p>
                    <p class="small">Dirección completa tras primera cita</p>
                </div>

                <div class="info-item">
                    <h3>📞 Teléfono</h3>
                    <p><a href="tel:{{ site.phone | remove: ' ' }}">{{ site.phone }}</a></p>
                    <p class="small">Horario de atención telefónica:<br>L-V de 10:00 a 14:00 y 16:00 a 20:00</p>
                </div>

                <div class="info-item">
                    <h3>✉️ Email</h3>
                    <p>{{ site.email }}</p>
                    <p class="small">Respondo en 24-48 horas laborables</p>
                </div>
            </div>

            <div class="response-time">
                <h3>Tiempo de respuesta</h3>
                <p>
                    Me comprometo a responder a tu consulta en un máximo de 48 horas laborables.
                    Si no recibes respuesta, por favor, revisa tu carpeta de spam o contacta por teléfono.
                </p>
            </div>
        </div>
    </div>

    <div class="map-section">
        <h2>Zona de consulta</h2>
        <p>Mi consulta se encuentra en el barrio del Zaidín, con fácil acceso en transporte público y disponibilidad de aparcamiento.</p>
        <!-- Aquí iría el mapa de Google Maps embed -->
        <div class="map-placeholder">
            [Insertar aquí iframe de Google Maps con la ubicación]
        </div>
    </div>
</div>
