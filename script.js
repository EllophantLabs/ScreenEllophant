document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Animation für das Einblenden
            card.style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';

            // WICHTIG: Nach Abschluss der Animation den Inline-Style entfernen
            // Damit das CSS (style.css) wieder die Kontrolle über die Hover-Transition hat
            setTimeout(() => {
                card.style.transition = ''; 
            }, 800); 
        }, 150 * index);
    });
});