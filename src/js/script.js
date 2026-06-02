const navbar = document.getElementById('navbar');

const handleScroll = () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll, {
    passive: true
});

// Abrir e fechar sidebar
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuBtn = document.getElementById('menuBtn');
const sidebarClose = document.getElementById('sidebarClose');

const openSidebar = () => {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

const closeSidebar = () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

menuBtn.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
});