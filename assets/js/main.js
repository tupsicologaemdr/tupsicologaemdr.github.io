// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navDropdown = document.querySelector('.nav-dropdown');
    const navDropdownToggle = navDropdown ? navDropdown.querySelector('.nav-dropdown-toggle') : null;

    function closeDropdown() {
        if (!navDropdown || !navDropdownToggle) {
            return;
        }

        navDropdown.classList.remove('is-open');
        navDropdownToggle.setAttribute('aria-expanded', 'false');
    }

    function openDropdown() {
        if (!navDropdown || !navDropdownToggle) {
            return;
        }

        navDropdown.classList.add('is-open');
        navDropdownToggle.setAttribute('aria-expanded', 'true');
    }

    function isMobileMenuVisible() {
        return window.innerWidth <= 768 && mainNav.classList.contains('mobile-nav-active');
    }

    if (navDropdown && navDropdownToggle) {
        navDropdownToggle.addEventListener('click', function(event) {
            event.stopPropagation();

            const isOpen = navDropdown.classList.contains('is-open');

            if (isOpen) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });

        navDropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                openDropdown();
            }
        });

        navDropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                closeDropdown();
            }
        });
    }

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('mobile-nav-active');
        mobileMenuToggle.classList.toggle('active');

        // Update ARIA attributes
        const isExpanded = mainNav.classList.contains('mobile-nav-active');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);

        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            closeDropdown();
        }
    });

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('mobile-nav-active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            closeDropdown();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navDropdown && !navDropdown.contains(event.target)) {
            closeDropdown();
        }

        if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            mainNav.classList.remove('mobile-nav-active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            closeDropdown();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navDropdown && navDropdown.classList.contains('is-open')) {
            closeDropdown();
            navDropdownToggle.focus();
            return;
        }

        if (event.key === 'Escape' && mainNav.classList.contains('mobile-nav-active')) {
            mainNav.classList.remove('mobile-nav-active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            closeDropdown();
            mobileMenuToggle.focus();
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('mobile-nav-active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        if (!isMobileMenuVisible()) {
            closeDropdown();
        }
    });
});
