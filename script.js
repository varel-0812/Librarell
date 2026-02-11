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
