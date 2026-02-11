// =============================================
// 3D CARD EFFECT - ULTRA SMOOTH & ELEGANT
// =============================================
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // More subtle, elegant rotation
        const rotateX = (y - centerY) / 35 * -1;
        const rotateY = (x - centerX) / 35;
        
        // Dynamic shadow and glow
        const shadowX = (x - centerX) / 25;
        const shadowY = (y - centerY) / 25;
        
        card.style.transform = `
            perspective(2000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.01, 1.01, 1.01)
            translateZ(15px)
        `;
        
        card.style.boxShadow = `
            ${-shadowX}px ${-shadowY}px 40px rgba(200, 180, 255, 0.12),
            0 30px 60px -30px rgba(0, 0, 0, 0.8)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(2000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)";
        card.style.boxShadow = "0 30px 60px -30px rgba(0, 0, 0, 0.8)";
        card.style.transition = "all 0.7s cubic-bezier(0.2, 0.9, 0.4, 1)";
    });

    card.addEventListener("mouseenter", () => {
        card.style.transition = "all 0.2s ease";
    });
});

// =============================================
// PARALLAX EFFECT
// =============================================
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 30;
    document.body.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});

// =============================================
// SMOOTH REVEAL ANIMATION
// =============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.filter = 'blur(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.98)';
    card.style.filter = 'blur(2px)';
    card.style.transition = 'opacity 1s cubic-bezier(0.2, 0.9, 0.4, 1), transform 1s cubic-bezier(0.2, 0.9, 0.4, 1), filter 1s ease';
    observer.observe(card);
});

// =============================================
// TYPING EFFECT
// =============================================
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.letterSpacing = '0.4em';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        }
    };
    
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 600);
    });
}

// =============================================
// CURSOR GLOW EFFECT
// =============================================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle at center, 
        rgba(210, 190, 255, 0.03) 0%, 
        rgba(180, 160, 255, 0.02) 30%, 
        transparent 70%);
    pointer-events: none;
    z-index: 2;
    transition: transform 0.3s ease;
    transform: translate(-50%, -50%);
    filter: blur(20px);
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
});

// =============================================
// BUTTON HOVER EFFECT
// =============================================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1)';
    });
});

// =============================================
// HEADER PARALLAX SCROLL
// =============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
        header.style.opacity = 1 - (scrolled * 0.0015);
    }
});

// =============================================
// GLOWING PARTICLES SYSTEM - ULTRA PREMIUM
// =============================================

// Create particles container
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles';
document.body.appendChild(particlesContainer);

// Create large glowing orbs (background)
for (let i = 0; i < 5; i++) {
    const largeOrb = document.createElement('div');
    largeOrb.className = 'particle-large';
    
    const red = Math.floor(Math.random() * 100 + 155);
    const green = Math.floor(Math.random() * 100 + 100);
    const blue = 255;
    
    largeOrb.style.cssText = `
        width: ${Math.random() * 400 + 300}px;
        height: ${Math.random() * 400 + 300}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
        background: radial-gradient(circle at center, 
            rgba(${red}, ${green}, ${blue}, 0.15) 0%,
            rgba(${red - 50}, ${green - 50}, ${blue}, 0.08) 40%,
            transparent 80%);
    `;
    particlesContainer.appendChild(largeOrb);
}

// Create glowing particles (small-medium)
const particleCount = 120;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size
    const size = Math.random() * 15 + 4;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random animation duration
    const duration = Math.random() * 30 + 25;
    
    // Random animation delay
    const delay = Math.random() * 10;
    
    // Random colors (white, blue, purple, pink, gold)
    const colorType = Math.floor(Math.random() * 6);
    let color1, color2, color3;
    
    if (colorType === 0) { // White/Pearl
        color1 = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        color2 = `rgba(220, 220, 255, ${Math.random() * 0.4 + 0.3})`;
        color3 = `rgba(200, 200, 255, ${Math.random() * 0.3 + 0.2})`;
    } else if (colorType === 1) { // Blue
        color1 = `rgba(100, 200, 255, ${Math.random() * 0.5 + 0.5})`;
        color2 = `rgba(70, 150, 255, ${Math.random() * 0.4 + 0.3})`;
        color3 = `rgba(40, 100, 255, ${Math.random() * 0.3 + 0.2})`;
    } else if (colorType === 2) { // Purple
        color1 = `rgba(200, 150, 255, ${Math.random() * 0.5 + 0.5})`;
        color2 = `rgba(170, 120, 255, ${Math.random() * 0.4 + 0.3})`;
        color3 = `rgba(140, 90, 255, ${Math.random() * 0.3 + 0.2})`;
    } else if (colorType === 3) { // Pink
        color1 = `rgba(255, 180, 200, ${Math.random() * 0.5 + 0.5})`;
        color2 = `rgba(255, 140, 180, ${Math.random() * 0.4 + 0.3})`;
        color3 = `rgba(255, 100, 160, ${Math.random() * 0.3 + 0.2})`;
    } else if (colorType === 4) { // Cyan
        color1 = `rgba(100, 255, 220, ${Math.random() * 0.5 + 0.5})`;
        color2 = `rgba(70, 220, 200, ${Math.random() * 0.4 + 0.3})`;
        color3 = `rgba(40, 200, 180, ${Math.random() * 0.3 + 0.2})`;
    } else { // Gold
        color1 = `rgba(255, 220, 150, ${Math.random() * 0.5 + 0.5})`;
        color2 = `rgba(255, 200, 100, ${Math.random() * 0.4 + 0.3})`;
        color3 = `rgba(255, 180, 50, ${Math.random() * 0.3 + 0.2})`;
    }
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        background: radial-gradient(circle at center, 
            ${color1} 0%,
            ${color2} 40%,
            ${color3} 70%,
            transparent 100%
        );
        box-shadow: 
            0 0 ${size * 3}px ${color1},
            0 0 ${size * 6}px ${color2},
            0 0 ${size * 9}px ${color3};
        animation: floatGlow ${duration}s infinite;
        animation-delay: -${delay}s;
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    particlesContainer.appendChild(particle);
}

// Create interactive particles that follow mouse
const interactiveParticles = 20;
for (let i = 0; i < interactiveParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 8 + 4;
    const hue = Math.floor(Math.random() * 360);
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at center, 
            rgba(255, 255, 255, 0.9) 0%,
            hsl(${hue}, 80%, 70%) 50%,
            transparent 100%
        );
        box-shadow: 
            0 0 ${size * 3}px hsl(${hue}, 80%, 70%),
            0 0 ${size * 6}px hsl(${hue}, 80%, 50%);
        position: fixed;
        left: 50%;
        top: 50%;
        transition: all 0.1s ease;
        pointer-events: none;
        z-index: 9999;
    `;
    particlesContainer.appendChild(particle);
    
    // Animate interactive particles
    let angle = (i / interactiveParticles) * Math.PI * 2;
    let radius = 100 + (i * 5);
    let speed = 0.002 + (Math.random() * 0.003);
    
    function animateInteractiveParticles() {
        angle += speed;
        const mouseX = window.innerWidth / 2;
        const mouseY = window.innerHeight / 2;
        
        particle.style.left = mouseX + Math.cos(angle) * radius + 'px';
        particle.style.top = mouseY + Math.sin(angle) * radius + 'px';
        particle.style.opacity = 0.4 + Math.sin(Date.now() * 0.002 + i) * 0.2;
        particle.style.transform = `scale(${1 + Math.sin(Date.now() * 0.003 + i) * 0.3})`;
        
        requestAnimationFrame(animateInteractiveParticles);
    }
    
    animateInteractiveParticles();
}

// Additional floating glowing orbs that move very slowly
for (let i = 0; i < 10; i++) {
    const orb = document.createElement('div');
    
    const red = Math.floor(Math.random() * 100 + 155);
    const green = Math.floor(Math.random() * 100 + 100);
    const blue = 255;
    
    orb.style.cssText = `
        position: fixed;
        width: ${Math.random() * 300 + 200}px;
        height: ${Math.random() * 300 + 200}px;
        border-radius: 50%;
        background: radial-gradient(circle at center, 
            rgba(${red}, ${green}, ${blue}, 0.06) 0%,
            transparent 80%
        );
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        filter: blur(70px);
        animation: slowDrift ${Math.random() * 50 + 60}s infinite alternate ease-in-out;
        pointer-events: none;
        z-index: 0;
    `;
    particlesContainer.appendChild(orb);
}

// Mouse-reactive particles
document.addEventListener('mousemove', (e) => {
    const interactiveOrbs = document.querySelectorAll('.particle-large');
    interactiveOrbs.forEach((orb, index) => {
        const speed = 0.02 + (index * 0.002);
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// Add floating stars effect
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.3};
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        animation: twinkle ${Math.random() * 5 + 3}s infinite ease-in-out;
        pointer-events: none;
        z-index: 0;
    `;
    particlesContainer.appendChild(star);
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(1.5); }
    }
`;
document.head.appendChild(style);