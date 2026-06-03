'use strict';

/* ----------------------------------------------------------
   1. NAVBAR — Scroll behavior
---------------------------------------------------------- */
const navbar = document.getElementById('navbar');

const handleScroll = () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll, { passive: true });

/* ----------------------------------------------------------
   2. SIDEBAR — Abrir / Fechar
---------------------------------------------------------- */
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuBtn = document.getElementById('menuBtn');
const sidebarClose = document.getElementById('sidebarClose');

const openSidebar = () => {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // previne scroll do fundo
};

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

/* ----------------------------------------------------------
   3. FILTER TABS — Lógica de aba ativa
---------------------------------------------------------- */
const filterTabs = document.querySelectorAll('.filter-tab');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

/* ----------------------------------------------------------
   4. BOTÃO FAVORITO — Toggle estado
---------------------------------------------------------- */
document.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('liked');
        // Atualiza ícone: preenchido se liked
        const path = btn.querySelector('path');
        if (btn.classList.contains('liked')) {
            path.setAttribute('fill', 'currentColor');
        } else {
            path.setAttribute('fill', 'none');
        }
    });
});

/* ----------------------------------------------------------
   5. ADICIONAR AO CARRINHO — Toast feedback
---------------------------------------------------------- */
const toast = document.getElementById('toast');
let toastTimer;

const showToast = (msg = 'Item adicionado ao carrinho') => {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
};

document.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast();
    });
});

/* ----------------------------------------------------------
   6. NEWSLETTER — Feedback simples
---------------------------------------------------------- */
const newsletterSubmit = document.querySelector('.newsletter-submit');
const newsletterInput = document.querySelector('.newsletter-input');

newsletterSubmit.addEventListener('click', () => {
    const email = newsletterInput.value.trim();
    if (email && email.includes('@')) {
        showToast('Inscrição realizada com sucesso');
        newsletterInput.value = '';
    } else {
        showToast('Por favor, insira um e-mail válido');
    }
});