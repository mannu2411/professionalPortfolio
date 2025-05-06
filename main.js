
function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('active');
}
    // Loading screen functionality
    window.addEventListener('load', function() {
        setTimeout(function() {
            // Fade out loader
            const loader = document.querySelector('.loader-wrapper');
            loader.style.opacity = '0';
            
            // Show page content
            document.body.style.visibility = 'visible';
            
            // Remove loader after fade transition
            setTimeout(function() {
                loader.style.display = 'none';
                
                // Start particle animation
                initParticles();
            }, 500);
        }, 4500); // Total loading time: 3 seconds
    });
    
    // Particle animation
    function initParticles() {
        const animatedBg = document.getElementById('animated-bg');
        const numberOfParticles = 50;
        
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 2px and 5px
            const size = Math.random() * 3 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Random animation duration between 15s and 30s
            const duration = Math.random() * 15 + 15;
            
            // Create and apply animation
            const keyframes = `
                @keyframes float-${i} {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    50% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                    }
                    100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                }
            `;
            
            const styleElement = document.createElement('style');
            styleElement.textContent = keyframes;
            document.head.appendChild(styleElement);
            
            particle.style.animation = `float-${i} ${duration}s ease-in-out infinite`;
            
            animatedBg.appendChild(particle);
        }
    }

