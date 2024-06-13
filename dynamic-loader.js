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

// Load header and footer
loadHTML('header', '../header.html', setActiveNavLink);
loadHTML('footer', '../footer.html');

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