/**
 * Futuristic Card Component
 * A modern, customizable card with interactive effects and animations
 */
class FuturisticCard {
    constructor(element, options = {}) {
        this.card = element;
        this.wrapper = element.closest('.card-wrapper');
        this.front = element.querySelector('.card-front');
        this.back = element.querySelector('.card-back');
        this.isFlippable = this.wrapper.getAttribute('data-flippable') === 'true';
        this.flipTriggers = element.querySelectorAll('.flip-trigger');
        this.options = {
            tiltEffect: true,
            particleEffect: true,
            holographicEffect: true,
            glowOnHover: true,
            autoAnimation: false,
            ...options
        };
        
        this.init();
    }
    
    init() {
        // Add 3D tilt effect
        if (this.options.tiltEffect) {
            this.initTiltEffect();
        }
        
        // Add flip functionality
        if (this.isFlippable) {
            this.initFlipCard();
        }
        
        // Add particle effect for large cards
        if (this.options.particleEffect && this.wrapper.getAttribute('data-size') === 'large') {
            this.initParticleEffect();
        }
        
        // Auto-animate if enabled
        if (this.options.autoAnimation) {
            this.startAutoAnimation();
        }
        
        // Add loading animation
        this.simulateLoading();
    }
    
    initTiltEffect() {
        this.wrapper.addEventListener('mousemove', (e) => {
            const rect = this.wrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calculate rotation values (limited to +/- 10 degrees)
            const rotateY = mouseX * 0.01; // Max +/- 10 degrees
            const rotateX = -mouseY * 0.01; // Max +/- 10 degrees
            
            // Apply the rotation
            this.card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        this.wrapper.addEventListener('mouseleave', () => {
            // Reset rotation when mouse leaves
            this.card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    initFlipCard() {
        this.flipTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFlip();
            });
        });
    }
    
    toggleFlip() {
        this.card.classList.toggle('flipped');
    }
    
    initParticleEffect() {
        const particlesContainer = this.card.querySelector('.particles-container');
        
        if (!particlesContainer) return;
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random particle styling
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 5 + 2}px;
                height: ${Math.random() * 5 + 2}px;
                background: rgba(54, 163, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
                opacity: ${Math.random() * 0.8};
                box-shadow: 0 0 ${Math.random() * 10 + 5}px var(--primary-glow);
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0);
                }
                25% {
                    transform: translateY(-30px) translateX(15px);
                }
                50% {
                    transform: translateY(-10px) translateX(30px);
                }
                75% {
                    transform: translateY(-25px) translateX(5px);
                }
                100% {
                    transform: translateY(0) translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    startAutoAnimation() {
        if (this.isFlippable) {
            setInterval(() => {
                this.toggleFlip();
            }, 5000);
        }
    }
    
    simulateLoading() {
        // Add loading class
        this.card.classList.add('loading');
        
        // Remove after simulated load time
        setTimeout(() => {
            this.card.classList.remove('loading');
        }, 1500);
    }
    
    // Public API methods
    updateContent(title, description, imageSrc = null) {
        const titleElement = this.front.querySelector('.card-title');
        const descriptionElement = this.front.querySelector('.card-description');
        const imageElement = this.front.querySelector('.card-image img');
        
        if (titleElement) titleElement.textContent = title;
        if (descriptionElement) descriptionElement.textContent = description;
        if (imageElement && imageSrc) imageElement.src = imageSrc;
        
        // Re-trigger the loading effect
        this.simulateLoading();
    }
    
    setTheme(theme) {
        // Remove existing theme classes
        this.card.classList.remove('theme-cyberpunk', 'theme-scifi', 'theme-minimal');
        
        // Add new theme class
        if (theme) {
            this.card.classList.add(`theme-${theme}`);
        }
    }
}

/**
 * Initialize when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Create card instances
    const cards = document.querySelectorAll('.futuristic-card');
    cards.forEach(card => {
        new FuturisticCard(card);
    });
    
    // Handle button click ripple effect
    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            // Position the ripple
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            
            // Add ripple to button
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-switch');
    
    themeToggle.addEventListener('change', () => {
        document.body.setAttribute('data-theme', 
            themeToggle.checked ? 'light' : 'dark');
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .card-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
