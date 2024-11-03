// Function to load external HTML
function loadHTML(elementId, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).insertAdjacentHTML('beforebegin', data);
            document.getElementById(elementId).remove();
            if (callback) callback();
        });
}

// Force tooltip activation (for Photography page promo)
function initializeTooltips() {
    // Check if we're on the index page
    if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(tooltipTriggerEl => {
            const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
            tooltip.show(); // Show the tooltip indefinitely
        });
    }
}

// Load header and footer
loadHTML('header', '../header.html', setActiveNavLink);
loadHTML('footer', '../footer.html', initializeTooltips);

// Function to set the active nav link
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (currentPath === link.getAttribute('href') || currentPath === link.getAttribute('href') + '/' || currentPath === link.getAttribute('href') + '/index.html') {
            link.classList.add('active');
        }
    });
}