// Select all sections and divs you want to animate
const sections = document.querySelectorAll('section, div'); // This will select all <section> and <div> elements

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the animation
            entry.target.classList.add('visible');
            // Stop observing the element once it's visible
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Adjust threshold as needed
});

// Observe each section and div
sections.forEach(section => {
    observer.observe(section);
});
