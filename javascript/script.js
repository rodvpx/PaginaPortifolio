// Destacar a seção ativa no menu
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`.menu a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Botão de "Voltar ao Topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️';
backToTopButton.id = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 1.5rem;
    background-color: #FF9800;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Animação suave ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Carrossel
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function updateCarrossel(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateCarrossel(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarrossel(currentSlide);
});

// Alternar a classe "active" no menu quando o botão hambúrguer for clicado
const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
