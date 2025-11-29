/*
    -------------------------------------------
    FUNCIÓN DE TOGGLE (ACORDEÓN)
    -------------------------------------------
*/
function toggleDescription(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}


/*
    -------------------------------------------
    CÓDIGO JAVASCRIPT PARA LA LLUVIA DE CÓDIGO
    -------------------------------------------
*/
document.addEventListener('DOMContentLoaded', () => {
    const greenParticles = 50; 
    const blueParticlesProjectCards = 15; 
    const blueParticlesFinalCtaInternal = 60; 
    const particleCreationInterval = 250; 

    const greenCodeChars = ['0', '1', '>', '<', '&', '%', '#', 'Z', 'Y', 'X']; 
    const blueCodeChars = ['0', '1', 'A', 'B', '!', '@', '*', '{', '}', ';', '/', 'z', 'K', 'L']; 

    function createParticle(container, charType) {
        const particle = document.createElement('span');
        
        let chars, className, durationFactor, sizeFactor;

        if (charType === 'green') {
            chars = greenCodeChars;
            className = 'green-particle';
            durationFactor = 7;
            sizeFactor = 1.2;
        } else { 
            chars = blueCodeChars;
            className = 'code-particle'; 
            durationFactor = 6;
            sizeFactor = 1;
        }
        
        particle.classList.add(className);
        particle.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.fontSize = `${Math.random() * sizeFactor + 0.6}em`; 
        
        const duration = Math.random() * durationFactor + 4;
        particle.style.animationDuration = `${duration}s`; 
        
        particle.style.animationDelay = `${Math.random() * -duration}s`;
        
        container.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    function startRain(container, charType, initialCount) {
        for (let i = 0; i < initialCount; i++) {
            createParticle(container, charType);
        }
        
        setInterval(() => {
            createParticle(container, charType);
        }, particleCreationInterval); 
    }

    const techSectionsContainers = document.querySelectorAll('.code-section .code-rain-container-tech');
    techSectionsContainers.forEach(container => {
        startRain(container, 'green', greenParticles);
    });
    
    const projectCardsContainers = document.querySelectorAll('.project-card .code-rain-container-inner');
    projectCardsContainers.forEach(container => {
        startRain(container, 'blue', blueParticlesProjectCards);
    });

    const finalCtaInternalContainer = document.getElementById('code-final-cta-internal');
    if (finalCtaInternalContainer) {
        startRain(finalCtaInternalContainer, 'blue', blueParticlesFinalCtaInternal);
    }
});
