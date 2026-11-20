// Free4Talk Pro V27 - Interactive JavaScript Engine

document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Navbar Scroll Glass Effect
    const navbar = document.querySelector('.navbar');
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 40) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    // 3. Hero Typewriter Effect
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = [
        "the 2027 Edition.",
        "macOS Frosted Glass Blur.",
        "Live YouTube Room Streaming.",
        "Integrated Spotify Player.",
        "Permanent Direct Messages.",
        "Saved Room Chat History.",
        "Intelligent Spam Bot Defense."
    ];
    const typingDelay = 90;
    const erasingDelay = 45;
    const newTextDelay = 1800;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (!typedTextSpan) return;
        if (charIndex < textArray[textArrayIndex].length) {
            if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            if (cursorSpan) cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan) return;
        if (charIndex > 0) {
            if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            if (cursorSpan) cursorSpan.classList.remove("typing");
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, typingDelay + 400);
        }
    }

    if (typedTextSpan && textArray.length) {
        setTimeout(type, 800);
    }

    // 4. Circular Rotating Text Around Profile Logo
    function createCircularText() {
        const textElement = document.querySelector('.rotating-text');
        if (!textElement) return;
        const text = textElement.innerText.trim();
        textElement.innerText = '';
        const radius = 95;
        const totalChars = text.length;
        const degPerChar = 360 / totalChars;

        for (let i = 0; i < totalChars; i++) {
            const charSpan = document.createElement('span');
            charSpan.innerText = text[i];
            charSpan.style.position = 'absolute';
            charSpan.style.height = `${radius}px`;
            charSpan.style.transformOrigin = 'bottom center';
            charSpan.style.left = '50%';
            charSpan.style.bottom = '50%';
            charSpan.style.transform = `translateX(-50%) rotate(${i * degPerChar}deg)`;
            textElement.appendChild(charSpan);
        }
    }
    createCircularText();

    // 5. Light / Dark Theme Switch
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('f4t-theme') || 'dark';
    if (savedTheme === 'light') {
        root.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.checked = false;
    } else {
        root.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('f4t-theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('f4t-theme', 'light');
            }
        });
    }

    // 6. 3D Tilt Card Interaction
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        let rect = null;
        let ticking = false;

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
            rect = card.getBoundingClientRect();
        });

        card.addEventListener('mousemove', e => {
            if (!rect) rect = card.getBoundingClientRect();
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -7;
                    const rotateY = ((x - centerX) / centerX) * 7;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
                    ticking = false;
                });
                ticking = true;
            }
        });

        card.addEventListener('mouseleave', () => {
            rect = null;
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });

    // 7. Interactive macOS Showcase Window Tabs
    const tabButtons = document.querySelectorAll('.window-tab');
    const tabContents = document.querySelectorAll('.window-tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 8. Scroll Observer for Fade-In
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
});
