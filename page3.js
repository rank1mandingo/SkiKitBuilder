document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.scroll-section');

    // Create an observer to watch when sections enter the screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger CSS animations
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.25, // Trigger when 25% of the section is visible
        rootMargin: "0px 0px -100px 0px"
    });

    // Attach the observer to every section
    sections.forEach(section => {
        observer.observe(section);
    });
});