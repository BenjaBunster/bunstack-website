// Configuración de partículas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00ffff', '#ff00ff', '#ffffff']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Variables globales
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('nav-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const contactForm = document.getElementById('contactForm');

    // Navegación fija con scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Mostrar/ocultar botón de scroll to top
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Menú móvil toggle
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botón volver arriba
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animación de números en estadísticas
    function animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // Intersection Observer para animaciones on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animar contadores si es un elemento stat-number
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observar elementos con animaciones
    document.querySelectorAll('[data-aos], .reveal, .stat-number').forEach(element => {
        observer.observe(element);
    });

    // Efectos de hover para las tarjetas de servicio
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efectos de hover para portfolio
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(5deg)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });

    // Manejo del formulario de contacto con EmailJS
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const formMessage = document.getElementById('formMessage');
            const originalText = btnText.textContent;
            
            // Deshabilitar botón y mostrar loading
            submitBtn.disabled = true;
            btnText.textContent = 'Enviando...';
            formMessage.className = 'form-message';
            formMessage.textContent = '';
            
            // Preparar los parámetros del email
            const templateParams = {
                from_name: document.getElementById('nombre').value,
                from_email: document.getElementById('email').value,
                phone: document.getElementById('telefono').value || 'No proporcionado',
                service: document.getElementById('servicio').value,
                message: document.getElementById('mensaje').value,
                to_email: 'bunstackweb@gmail.com'
            };
            
            // Enviar con EmailJS
            emailjs.send('service_q8w3kcq', 'template_xv8majg', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formMessage.className = 'form-message success';
                    formMessage.textContent = '✓ ¡Mensaje enviado con éxito! Te responderemos pronto.';
                    contactForm.reset();
                    
                    // Ocultar mensaje después de 5 segundos
                    setTimeout(() => {
                        formMessage.className = 'form-message';
                    }, 5000);
                }, function(error) {
                    console.log('FAILED...', error);
                    formMessage.className = 'form-message error';
                    formMessage.textContent = '✗ Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.';
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    btnText.textContent = originalText;
                });
        });
    }

    // Efectos de typing para el hero
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    // Iniciar efecto de escritura después de un delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 50);
        }
    }, 1000);

    // Parallax effect para elementos
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-card');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Efecto de glitch ocasional en el logo
    function glitchEffect() {
        const logo = document.querySelector('.nav-logo');
        if (logo) {
            logo.style.textShadow = '2px 0 #ff00ff, -2px 0 #00ffff';
            logo.style.transform = 'skew(2deg)';
            
            setTimeout(() => {
                logo.style.textShadow = 'none';
                logo.style.transform = 'skew(0deg)';
            }, 150);
        }
    }

    // Ejecutar efecto glitch ocasionalmente
    setInterval(glitchEffect, 8000);

    // Smooth reveal animation para elementos
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal:not(.active)');
        
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Ejecutar una vez al cargar

    // Efecto de partículas en hover sobre botones
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    });

    function createParticles(element) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#00ffff';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'particleFloat 1s ease-out forwards';
            
            const rect = element.getBoundingClientRect();
            particle.style.left = rect.left + Math.random() * rect.width + 'px';
            particle.style.top = rect.top + Math.random() * rect.height + 'px';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // Añadir estilos de animación para partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-50px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Lazy loading para mejorar rendimiento
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Cursor personalizado para desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(0, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Cambiar cursor en hover sobre elementos interactivos
        document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                cursor.style.background = 'rgba(255, 0, 255, 0.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = 'rgba(0, 255, 255, 0.5)';
            });
        });
    }

    // Preloader simple
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    preloader.innerHTML = '<div class="loading"></div>';
    document.body.appendChild(preloader);

    // Ocultar preloader cuando todo esté cargado
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });

    console.log('🚀 BunStack website loaded successfully!');
});

// Funciones de utilidad
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        });
    }
}

// Data de servicios
const servicesData = {
    mantenimiento: {
        title: 'Mantenimiento Web',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>`,
        description: 'Mantenimiento completo y soporte técnico profesional para mantener tu sitio web siempre actualizado, seguro y funcionando perfectamente.',
        features: [
            'Cambio de hosting y migración',
            'Modificaciones y actualizaciones web',
            'Actualizaciones continuas de seguridad',
            'Respaldos automáticos diarios',
            'Soporte técnico prioritario',
            'Optimización de velocidad y rendimiento',
            'Monitoreo 24/7 del sitio',
            'Certificado SSL incluido'
        ],
        price: 'Desde $149.990/mes'
    },
    landing: {
        title: 'Landing Page',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>`,
        description: 'Páginas de aterrizaje diseñadas estratégicamente para maximizar conversiones y transformar visitantes en clientes potenciales.',
        features: [
            'Dominio .cl incluido primer año',
            'Hosting premium incluido',
            'Diseño persuasivo y atractivo',
            'Llamados a la acción efectivos',
            'Optimización para conversiones',
            'Botón de WhatsApp integrado',
            'Formulario de contacto',
            'Optimización SEO básica',
            'Responsive 100% móvil'
        ],
        price: 'Desde $249.990'
    },
    corporativa: {
        title: 'Páginas Web Corporativas',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M10 9l5 3-5 3V9z"/>
        </svg>`,
        description: 'Sitios web profesionales que proyectan la imagen de tu empresa con diseño moderno, funcionalidad completa y presencia digital sólida.',
        features: [
            'Dominio .cl incluido primer año',
            'Hosting premium incluido',
            'Diseño 100% personalizado',
            'Optimización SEO avanzada',
            'Hasta 5 secciones completas',
            'Formulario de contacto',
            'Integración redes sociales',
            'Galería de imágenes',
            'Mapa de ubicación',
            'Certificado SSL incluido'
        ],
        price: 'Desde $399.990'
    },
    tienda: {
        title: 'Tienda Online',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 3h18v18H3z"/>
            <path d="M9 8l6 4-6 4V8z"/>
        </svg>`,
        description: 'E-commerce completo y profesional con pasarela de pagos Webpay integrada, gestión de inventario y todas las herramientas para vender online.',
        features: [
            'Dominio .cl incluido primer año',
            'Hosting premium incluido',
            'Catálogo ilimitado de productos',
            'Carrito de compras avanzado',
            'Webpay Plus integrado',
            'Panel administrable intuitivo',
            'Gestión de inventario',
            'Sistema de cupones y descuentos',
            'Cálculo automático de envíos',
            'Reportes de ventas',
            'Integración con redes sociales',
            'SEO optimizado'
        ],
        price: 'Desde $599.990'
    }
};

// Función para abrir el modal
function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    const service = servicesData[serviceType];
    
    if (!service) return;
    
    // Construir el HTML del modal
    const featuresHTML = service.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-service-icon">${service.icon}</div>
        <h2 class="modal-service-title">${service.title}</h2>
        <p class="modal-service-description">${service.description}</p>
        <ul class="modal-service-features">${featuresHTML}</ul>
        <div class="modal-service-price">${service.price}</div>
        <button class="modal-cta-button" onclick="scrollToContact()">¡Cotizar Ahora!</button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Función para ir a la sección de contacto
function scrollToContact() {
    closeServiceModal();
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('click', function(e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

measurePerformance();