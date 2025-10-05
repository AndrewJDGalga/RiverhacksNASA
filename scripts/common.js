// Create starfield
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const numberOfStars = 150;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay for twinkling effect
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Theme Management
let currentTheme = 'light';

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
    // Store in sessionStorage so it persists across page navigation
    sessionStorage.setItem('theme', theme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Menu Management
function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    if (menu) {
        menu.classList.toggle('active');
    }
}

function navigate(page) {
    // Determine current location to build correct relative paths
    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes('/pages/');
    
    // Map page names to actual file paths
    const pages = {
        'home': isInPagesFolder ? '../index.html' : 'index.html',
        'stories': isInPagesFolder ? 'stories_page_template.html' : 'pages/stories_page_template.html',
        'resources': isInPagesFolder ? 'resources_page.html' : 'pages/resources_page.html',
        'quiz': isInPagesFolder ? 'cosmic_quiz.html' : 'pages/cosmic_quiz.html',
        'contact': isInPagesFolder ? 'contact.html' : 'pages/contact.html'
    };
    
    if (pages[page]) {
        window.location.href = pages[page];
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menuDropdown');
    const hamburger = document.querySelector('.hamburger-menu');
    
    if (menu && hamburger && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create stars
    createStars();
    
    // Initialize theme from sessionStorage or default to light
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light');
    }
});
