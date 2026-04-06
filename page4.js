document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the 'scroll-fade' class
    const faders = document.querySelectorAll('.scroll-fade');

    // Create the Intersection Observer
    const appearOptions = {
        threshold: 0.15, // Triggers when 15% of the item is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, appearOptions);

    // Tell the observer to watch each element
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});