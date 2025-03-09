document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = link.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for your message! We will get back to you soon.');
        e.target.reset();
    });
    
    // Hide loader when page is loaded
    window.addEventListener('load', () => {
        document.getElementById('loader').style.display = 'none';
    });
});
