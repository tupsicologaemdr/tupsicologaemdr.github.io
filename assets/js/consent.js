// Consent Banner Management
class ConsentManager {
    constructor() {
        this.consentKey = 'tupsicologia-consent';
        this.banner = document.getElementById('consent-banner');
        this.acceptBtn = document.getElementById('consent-accept');
        this.rejectBtn = document.getElementById('consent-reject');

        this.init();
    }

    init() {
        // Check if user has already made a choice
        if (!this.hasConsentChoice()) {
            this.showBanner();
        } else if (this.isConsentGiven()) {
            // Banner was already dismissed, but gtag might need reloading if page was cached
            this.updateGoogleAnalytics();
        }

        // Attach event listeners
        if (this.acceptBtn) {
            this.acceptBtn.addEventListener('click', () => this.acceptConsent());
        }
        if (this.rejectBtn) {
            this.rejectBtn.addEventListener('click', () => this.rejectConsent());
        }
    }

    hasConsentChoice() {
        return localStorage.getItem(this.consentKey) !== null;
    }

    isConsentGiven() {
        return localStorage.getItem(this.consentKey) === 'accepted';
    }

    showBanner() {
        if (this.banner) {
            // Small delay to ensure CSS is ready
            setTimeout(() => {
                this.banner.classList.add('visible');
                this.focusTrap();
            }, 100);
        }
    }

    hideBanner() {
        if (this.banner) {
            this.banner.classList.remove('visible');
            setTimeout(() => {
                this.banner.style.display = 'none';
            }, 400);
        }
    }

    acceptConsent() {
        localStorage.setItem(this.consentKey, 'accepted');
        // Set expiration to 1 year
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        localStorage.setItem(this.consentKey + '-expiration', expirationDate.getTime());

        this.hideBanner();
        this.updateGoogleAnalytics();
        this.dispatchConsentEvent('accepted');
    }

    rejectConsent() {
        localStorage.setItem(this.consentKey, 'rejected');
        // Set expiration to 6 months for rejected choice
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 6);
        localStorage.setItem(this.consentKey + '-expiration', expirationDate.getTime());

        this.hideBanner();
        this.dispatchConsentEvent('rejected');
    }

    updateGoogleAnalytics() {
        // Update gtag consent settings
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    dispatchConsentEvent(status) {
        // Dispatch custom event for other scripts to listen
        const event = new CustomEvent('consentAccepted', {
            detail: { status: status }
        });
        document.dispatchEvent(event);
    }

    focusTrap() {
        // Simple focus management for accessibility
        if (!this.banner) return;

        const focusableElements = this.banner.querySelectorAll(
            'button, a, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
}

// Initialize consent manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ConsentManager();
    });
} else {
    new ConsentManager();
}
