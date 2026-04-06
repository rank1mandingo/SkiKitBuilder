document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');

    // Add a simple entrance animation
    nodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            node.style.opacity = '1';
        }, 200 * index);
    });

    // Interaction for the nodes
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            // You can add logic here to open a modal or link to a shop
            console.log("Selected: " + node.querySelector('h3').innerText);
        });
    });
});