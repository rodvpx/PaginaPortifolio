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

// Animação suave ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    });
});

// Função para alternar o menu hambúrguer
document.querySelector('.hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Alterna a visibilidade do menu
});

// Animação suave ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
            // Fechar o menu ao clicar em um item (opcional)
            const menu = document.querySelector('.menu');
            menu.classList.remove('active');
        }
    });
});
