// Modern Course Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal anchor link (starts with # but not a link to another page)
            if (href.startsWith('#') && !href.includes('.html')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // Close mobile menu if open
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    
                    // Smooth scroll to section
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    updateActiveNavLink(this);
                }
            } else {
                // For external links (like syllabus.html or index.html#section), let the browser handle navigation normally
                // Just close mobile menu if open
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Update Active Navigation Link on Scroll
    function updateActiveNavLink(activeLink = null) {
        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        } else {
            const sections = document.querySelectorAll('.section');
            const headerHeight = document.querySelector('.header').offsetHeight;
            const scrollPosition = window.scrollY + headerHeight + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (correspondingLink) {
                        correspondingLink.classList.add('active');
                    }
                }
            });
        }
    }

    // Scroll event listener for active nav updates
    window.addEventListener('scroll', updateActiveNavLink);

    // Smooth animations for better user experience

    // Parallax Effect for Background Elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const matrixBg = document.querySelector('.matrix-bg');
        
        if (matrixBg) {
            matrixBg.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Card Hover Sound Effect (Visual feedback)
    const cards = document.querySelectorAll('.card, .assignment-card, .instructor-card, .policy-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Loading Animation
    function showLoadingComplete() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease-in-out';
            document.body.style.opacity = '1';
        }, 100);
    }

    showLoadingComplete();

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for scroll animations
    const animatedElements = document.querySelectorAll('.card, .assignment-card, .instructor-card, .policy-card, .syllabus-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Typewriter Effect for Hero Subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1500);
    }

    // Console Welcome Message
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║          INTRO TO CODING IN THE HUMANITIES            ║
    ║                   WRIT 20833                          ║
    ║                                                       ║
    ║  > Initializing course website...                     ║
    ║  > Loading digital humanities tools...                ║
    ║  > System ready for learning...                       ║
    ║                                                       ║
    ║  "Code is the bridge between human creativity         ║
    ║   and digital expression."                            ║
    ╚═══════════════════════════════════════════════════════╝
    `);

    // Current Time Display
    function updateTimeDisplay() {
        const now = new Date();
        const timeString = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} :: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        // Update any time displays if they exist
        const timeDisplays = document.querySelectorAll('.time-display');
        timeDisplays.forEach(display => {
            display.textContent = timeString;
        });
    }

    // Update time every second
    setInterval(updateTimeDisplay, 1000);
    updateTimeDisplay(); // Initial call

    // Performance monitoring
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`✅ Course website loaded in ${Math.round(loadTime)}ms`);
    });
});
