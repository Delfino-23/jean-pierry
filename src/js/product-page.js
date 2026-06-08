'use strict';

/* ==============================================================
   CATÁLOGO DE PRODUTOS
   Fonte de verdade: todos os dados ficam aqui.
   Adicionar, remover ou editar produtos é só mexer neste array.
============================================================== */
const PRODUCTS = [
    {
        id: 1,
        name: 'Casaco Estruturado',
        sub: 'Lã Merino — Noir',
        eyebrow: 'Femme · Inverno 2025',
        price: 8900,
        badge: 'Novo',
        img: './assets/casaco-estruturado.jpg',
        sizes: ['34', '36', '38', '40', '42'],
        unavailable: ['34'],
        desc: 'Estruturado em lã merino italiana de alto fuste, o casaco foi concebido para redefinir a silhueta. Lapela dupla, botões dourados e forração em seda natural fazem desta peça uma declaração atemporal de elegância.'
    },
    {
        id: 2,
        name: 'Vestido Seda',
        sub: 'Seda Natural — Ivoire',
        eyebrow: 'Femme · Haute Couture',
        price: 5400,
        badge: null,
        img: './assets/vestido-seda.jpg',
        sizes: ['34', '36', '38', '40'],
        unavailable: [],
        desc: 'Tecido em seda natural de 22 momme, o vestido flui com a delicadeza de uma segunda pele. O decote assimétrico e o comprimento midi conferem uma modernidade discreta a um clássico intemporal.'
    },
    {
        id: 3,
        name: 'Blazer Tailored',
        sub: 'Crepe Japonês — Gris',
        eyebrow: 'Femme · Coleção Assinatura',
        price: 6200,
        badge: 'Exclusivo',
        img: './assets/blazer-tailored.jpg',
        sizes: ['P', 'M', 'G', 'GG'],
        unavailable: ['GG'],
        desc: 'Alfaiataria refinada em crepe japonês virgem. Cada costura é executada à mão em nosso atelier parisiense. O corte ligeiramente oversized remete à masculinidade ressignificada da moda contemporânea.'
    },
    {
        id: 4,
        name: 'Calça Palazzo',
        sub: 'Viscose Premium — Blanc',
        eyebrow: 'Femme · Inverno 2025',
        price: 3800,
        badge: null,
        img: './assets/calca-palazzo.jpg',
        sizes: ['34', '36', '38', '40', '42'],
        unavailable: [],
        desc: 'A amplitude da calça palazzo encontra o peso ideal na viscose premium belga. Cós alto com pence e caimento impecável — a peça ancora qualquer conjunto com autoridade e leveza em igual medida.'
    },
    {
        id: 5,
        name: 'Trench Coat',
        sub: 'Gabardine — Camel',
        eyebrow: 'Femme · Inverno 2025',
        price: 7600,
        badge: 'Novo',
        img: './assets/trench-coat.jpg',
        sizes: ['P', 'M', 'G', 'GG'],
        unavailable: ['P'],
        desc: 'Revisitação moderna do trench clássico em gabardine camel de procedência britânica. Cinto duplo, botões de chifre e forro xadrez em fio de ouro. Uma arquitetura em tecido pensada para durar décadas.'
    },
    {
        id: 6,
        name: 'Top Cetim',
        sub: 'Cetim de Seda — Bordeaux',
        eyebrow: 'Femme · Essenciais',
        price: 2400,
        badge: null,
        img: './assets/top-cetim.png',
        sizes: ['PP', 'P', 'M', 'G'],
        unavailable: [],
        desc: 'Em cetim de seda natural, o top combina brilho e elegância em uma peça essencial do guarda-roupa de luxo. Alças finas ajustáveis e bainha invisível revelam o cuidado milimétrico de nosso atelier.'
    },
    {
        id: 7,
        name: 'Cashmere Knit',
        sub: 'Cashmere Puro — Oat',
        eyebrow: 'Unissex · Edição Limitada',
        price: 4200,
        badge: 'Limitado',
        img: './assets/cashmere-knit.jpg',
        sizes: ['P', 'M', 'G'],
        unavailable: [],
        desc: 'Tricotado à mão em cashmere puro grau A de origem mongol. A tonalidade oat aquecida e o ponto canelado duplo entregam conforto e sofisticação em uma mesma peça. Edição com apenas 80 unidades numeradas.'
    },
    {
        id: 8,
        name: 'Saia Midi',
        sub: 'Lã Fina — Charcoal',
        eyebrow: 'Femme · Inverno 2025',
        price: 3100,
        badge: null,
        img: './assets/saia-midi.jpg',
        sizes: ['34', '36', '38', '40', '42'],
        unavailable: ['42'],
        desc: 'Saia midi em lã fina italiana com caimento reto e fenda traseira discreta. O charcoal é a versão revisitada do clássico neutro — profundo o suficiente para substituir o preto, sofisticado o suficiente para dispensar adereços.'
    },
    {
        id: 9,
        name: 'Vestido Plissado Soleil',
        sub: 'Chiffon de Seda — Rose',
        eyebrow: 'Femme · Spring Summer',
        price: 5900,
        badge: 'Novo',
        img: './assets/vestido1.jpg',
        sizes: ['36', '38', '40', '42'],
        unavailable: [],
        desc: 'Desenvolvido em chiffon de seda fluida com plissado soleil feito à mão. O movimento etéreo da saia contrasta com o corpete estruturado, criando uma silhueta romântica e imponente para noites de verão.'
    },
    {
        id: 10,
        name: 'Vestido Alfaiataria Column',
        sub: 'Crepe de Chine — Rouge',
        eyebrow: 'Femme · Coleção Assinatura',
        price: 6800,
        badge: 'Exclusivo',
        img: './assets/vestido2.jpg',
        sizes: ['34', '36', '38', '40'],
        unavailable: ['34'],
        desc: 'Com corte coluna minimalista e fenda lateral profunda, esta peça em crepe de chine abraça as linhas do corpo com precisão cirúrgica. Decote canoa discreto que exala sofisticação urbana.'
    },
    {
        id: 11,
        name: 'Vestido Envelope Évasé',
        sub: 'Linho Rústico — Sand',
        eyebrow: 'Femme · Resort',
        price: 4600,
        badge: null,
        img: './assets/vestido3.jpg',
        sizes: ['P', 'M', 'G'],
        unavailable: [],
        desc: 'A leveza do linho belga em uma modelagem envelope com amarração ajustável e saia evasé. Perfeito para o dia a dia de alto padrão, unindo o despojamento chique à estrutura impecável da alta moda.'
    },
    {
        id: 12,
        name: 'Vestido Romântico Renda',
        sub: 'Renda Guipure — Off White',
        eyebrow: 'Femme · Haute Couture',
        price: 8200,
        badge: 'Limitado',
        img: './assets/vestido4.jpg',
        sizes: ['36', '38', '40'],
        unavailable: ['40'],
        desc: 'Renda guipure francesa recortada e aplicada manualmente sobre base de tule invisível. Mangas bufantes sutis e fechamento posterior por botões revestidos em seda. Uma verdadeira obra de arte vestível.'
    },
    {
        id: 13,
        name: 'Vestido Slip Dress',
        sub: 'Seda Lavada — Emerald',
        eyebrow: 'Femme · Essenciais',
        price: 3900,
        badge: null,
        img: './assets/vestido5.jpg',
        sizes: ['PP', 'P', 'M', 'G'],
        unavailable: [],
        desc: 'O clássico slip dress dos anos 90 redefinido em seda lavada de caimento pesado e fosco. O decote em corte viés proporciona um ajuste fluido que acompanha os movimentos com sensualidade velada.'
    },
    {
        id: 14,
        name: 'Vestido Midi Gola Alta',
        sub: 'Malha de Tricot — Taupe',
        eyebrow: 'Femme · Inverno 2025',
        price: 4800,
        badge: 'Novo',
        img: './assets/vestido6.jpg',
        sizes: ['P', 'M', 'G'],
        unavailable: [],
        desc: 'Tecido em ponto Fang encorpado com fios de viscose e elastano premium. A gola alta e o comprimento midi alongam a silhueta, tornando-o a peça-chave ideal para sobreposições com casacos pesados.'
    },
    {
        id: 15,
        name: 'Vestido Executivo Blazer',
        sub: 'Lã Fria Italiana — Navy',
        eyebrow: 'Femme · Business Suit',
        price: 7200,
        badge: 'Exclusivo',
        img: './assets/vestido7.jpg',
        sizes: ['36', '38', '40', '42', '44'],
        unavailable: ['44'],
        desc: 'A fusão perfeita entre o poder do blazer e a elegância do vestido. Confeccionado em lã fria super 120s, possui lapela xale em cetim e abotoamento duplo inglês, ideal para ambientes corporativos de prestígio.'
    },
    {
        id: 16,
        name: 'Vestido Drapeado Fluid',
        sub: 'Jersey Premium — Midnight',
        eyebrow: 'Femme · Noir Collection',
        price: 5100,
        badge: null,
        img: './assets/vestido8.jpg',
        sizes: ['P', 'M', 'G', 'GG'],
        unavailable: [],
        desc: 'Drapeados milimetricamente posicionados na cintura criam um efeito esculpido altamente lisonjeiro. O toque gelado e elástico do jersey premium entrega conforto absoluto sem perder o rigor da estética de gala.'
    },
    {
        id: 17,
        name: 'Vestido Glam Longo',
        sub: 'Zibelina — Velour Noir',
        eyebrow: 'Femme · Gala & Eventos',
        price: 9500,
        badge: 'Limitado',
        img: './assets/vestido9.jpg',
        sizes: ['34', '36', '38', '40'],
        unavailable: ['34', '36'],
        desc: 'A estrutura imponente da zibelina confere volume dramático à saia deste vestido longo de gala. O corpete com barbatanas internas oferece sustentação perfeita, finalizado com um brilho discreto e aristocrático.'
    }
];

/* ==============================================================
   ESTADO DA APLICAÇÃO
   cart:  { [productId]: { product, qty, size } }
   favs:  Set de product ids
============================================================== */
const LS_CART = 'me_cart_v2';
const LS_FAVS = 'me_favs_v2';

let cart = loadLS(LS_CART, {});
let favs = new Set(loadLS(LS_FAVS, []));
let currentProduct = null; // produto aberto no modal
let selectedSize = null; // tamanho escolhido no modal

function loadLS(key, fallback) {
    try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : fallback; }
    catch { return fallback; }
}
function saveCart() { localStorage.setItem(LS_CART, JSON.stringify(cart)); }
function saveFavs() { localStorage.setItem(LS_FAVS, JSON.stringify([...favs])); }

/* ==============================================================
   TOAST
============================================================== */
const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
    clearTimeout(toastTimer);
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

/* ==============================================================
   OVERLAY — controla qual modal está aberto
============================================================== */
const overlay = document.getElementById('overlay');
let activeModal = null; // referência ao elemento modal aberto

function openModal(modalEl) {
    closeAll();
    activeModal = modalEl;
    modalEl.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeAll() {
    document.querySelectorAll(
        '.sidebar, .modal-product, .modal-cart, .modal-fav'
    ).forEach(el => el.classList.remove('open'));
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    activeModal = null;
}

overlay.addEventListener('click', closeAll);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

/* ==============================================================
   NAVBAR — scroll
============================================================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ==============================================================
   SIDEBAR — abrir / fechar
============================================================== */
const sidebar = document.getElementById('sidebar');
document.getElementById('menuBtn').addEventListener('click', () => {
    sidebar.setAttribute('aria-hidden', 'false');
    openModal(sidebar);
});
document.getElementById('sidebarClose').addEventListener('click', closeAll);

/* ==============================================================
   FILTER TABS
============================================================== */
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

/* ==============================================================
   RENDERIZAR PRODUTOS
============================================================== */
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = PRODUCTS.map(p => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-img-wrap">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <button class="product-fav ${favs.has(p.id) ? 'liked' : ''}"
                  data-fav="${p.id}" aria-label="Favoritar">
            <svg viewBox="0 0 24 24" fill="${favs.has(p.id) ? 'currentColor' : 'none'}"
                 stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <button class="product-quick" data-quick="${p.id}">Adicionar ao Carrinho</button>
        </div>
        <div class="product-info" data-open="${p.id}">
          <p class="product-name">${p.name}</p>
          <p class="product-sub">${p.sub}</p>
          <p class="product-price">${formatPrice(p.price)}</p>
        </div>
      </article>
    `).join('');

    // Clique na imagem / info → abre modal do produto
    grid.querySelectorAll('.product-img-wrap img, [data-open]').forEach(el => {
        el.addEventListener('click', e => {
            const id = parseInt(el.dataset.open || el.closest('.product-card').dataset.id);
            openProductModal(id);
        });
    });

    // Botão favoritar no card
    grid.querySelectorAll('[data-fav]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.fav);
            toggleFav(id, btn);
        });
    });

    // Quick add
    grid.querySelectorAll('[data-quick]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.quick);
            openProductModal(id, true); // abre com foco no seletor de tamanho
        });
    });
}

/* ==============================================================
   FAVORITOS — toggle
============================================================== */
function toggleFav(id, triggerBtn) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    if (favs.has(id)) {
        favs.delete(id);
        showToast('Removido dos favoritos');
    } else {
        favs.add(id);
        showToast(`${p.name} adicionado aos favoritos`);
    }
    saveFavs();
    updateFavBadge();
    // Atualiza todos os botões de favorito com este id
    updateFavButtons(id);
}

function updateFavButtons(id) {
    const liked = favs.has(id);
    document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => {
        btn.classList.toggle('liked', liked);
        const path = btn.querySelector('path');
        if (path) path.setAttribute('fill', liked ? 'currentColor' : 'none');
    });
    // Atualiza botão no modal de produto
    if (currentProduct && currentProduct.id === id) {
        updateMpFavBtn();
    }
}

function updateFavBadge() {
    const badge = document.getElementById('favBadge');
    const count = favs.size;
    badge.textContent = count || '';
    badge.classList.toggle('visible', count > 0);
}

/* ==============================================================
   MODAL — FAVORITOS
============================================================== */
document.getElementById('navFavBtn').addEventListener('click', () => {
    renderFavModal();
    openModal(document.getElementById('modalFav'));
});
document.getElementById('favClose').addEventListener('click', closeAll);

function renderFavModal() {
    const body = document.getElementById('favBody');
    const items = PRODUCTS.filter(p => favs.has(p.id));

    if (!items.length) {
        body.innerHTML = `
        <div class="fav-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <p>Sua lista de favoritos está vazia</p>
        </div>`;
        return;
    }

    body.innerHTML = `<div class="fav-grid">${items.map(p => `
      <div class="fav-card" data-open="${p.id}">
        <div class="fav-card-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <button class="fav-card-remove" data-remove="${p.id}" aria-label="Remover favorito">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div class="fav-card-info">
          <p class="fav-card-name">${p.name}</p>
          <p class="fav-card-price">${formatPrice(p.price)}</p>
        </div>
      </div>
    `).join('')}</div>`;

    // Abrir produto ao clicar no card
    body.querySelectorAll('[data-open]').forEach(el => {
        el.addEventListener('click', e => {
            if (!e.target.closest('[data-remove]')) {
                openProductModal(parseInt(el.dataset.open));
            }
        });
    });

    // Remover do favorito
    body.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.remove);
            toggleFav(id);
            renderFavModal(); // re-render
        });
    });
}

/* ==============================================================
   MODAL — PRODUTO
============================================================== */
document.getElementById('mpClose').addEventListener('click', closeAll);

function openProductModal(id, focusSizes = false) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    currentProduct = p;
    selectedSize = null;

    // Preenche campos
    document.getElementById('mpImg').src = p.img;
    document.getElementById('mpImg').alt = p.name;
    document.getElementById('mpEyebrow').textContent = p.eyebrow;
    document.getElementById('mpName').textContent = p.name;
    document.getElementById('mpSub').textContent = p.sub;
    document.getElementById('mpPrice').textContent = formatPrice(p.price);
    document.getElementById('mpDesc').textContent = p.desc;

    // Tamanhos
    const sizesEl = document.getElementById('mpSizes');
    sizesEl.innerHTML = p.sizes.map(s => `
      <button class="mp-size-btn ${p.unavailable.includes(s) ? 'unavailable' : ''}"
              data-size="${s}" ${p.unavailable.includes(s) ? 'disabled' : ''}>
        ${s}
      </button>
    `).join('');

    sizesEl.querySelectorAll('.mp-size-btn:not(.unavailable)').forEach(btn => {
        btn.addEventListener('click', () => {
            sizesEl.querySelectorAll('.mp-size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedSize = btn.dataset.size;
        });
    });

    // Botão favorito no modal
    updateMpFavBtn();

    openModal(document.getElementById('modalProduct'));

    if (focusSizes) {
        setTimeout(() => sizesEl.querySelector('.mp-size-btn:not(.unavailable)')?.focus(), 450);
    }
}

function updateMpFavBtn() {
    if (!currentProduct) return;
    const btn = document.getElementById('mpBtnFav');
    const txtEl = document.getElementById('mpBtnFavText');
    const liked = favs.has(currentProduct.id);
    btn.classList.toggle('liked', liked);
    const path = btn.querySelector('path');
    if (path) path.setAttribute('fill', liked ? 'currentColor' : 'none');
    txtEl.textContent = liked ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos';
}

// Adicionar ao carrinho pelo modal
document.getElementById('mpBtnCart').addEventListener('click', () => {
    if (!currentProduct) return;
    if (!selectedSize) {
        showToast('Selecione um tamanho');
        document.getElementById('mpSizes').querySelector('.mp-size-btn:not(.unavailable)')?.classList.add('selected');
        return;
    }
    addToCart(currentProduct, selectedSize);
    closeAll();
    showToast(`${currentProduct.name} adicionado ao carrinho`);
});

// Favoritar pelo modal
document.getElementById('mpBtnFav').addEventListener('click', () => {
    if (!currentProduct) return;
    toggleFav(currentProduct.id);
});

/* ==============================================================
   CARRINHO — lógica
============================================================== */
function cartKey(id, size) { return `${id}__${size}`; }

function addToCart(product, size) {
    const key = cartKey(product.id, size);
    if (cart[key]) {
        cart[key].qty += 1;
    } else {
        cart[key] = { product, size, qty: 1 };
    }
    saveCart();
    updateCartBadge();
}

function removeFromCart(key) {
    delete cart[key];
    saveCart();
    updateCartBadge();
    renderCartModal();
}

function changeQty(key, delta) {
    if (!cart[key]) return;
    cart[key].qty = Math.max(1, cart[key].qty + delta);
    saveCart();
    updateCartBadge();
    renderCartModal();
}

function cartTotal() {
    return Object.values(cart).reduce((sum, item) => sum + item.product.price * item.qty, 0);
}

function cartCount() {
    return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const count = cartCount();
    badge.textContent = count || '';
    badge.classList.toggle('visible', count > 0);
}

/* ==============================================================
   MODAL — CARRINHO
============================================================== */
document.getElementById('navCartBtn').addEventListener('click', () => {
    renderCartModal();
    openModal(document.getElementById('modalCart'));
});
document.getElementById('cartClose').addEventListener('click', closeAll);
document.getElementById('cartContinue').addEventListener('click', closeAll);

function renderCartModal() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    const items = Object.entries(cart);

    if (!items.length) {
        body.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p>Seu carrinho está vazio</p>
        </div>`;
        footer.style.display = 'none';
        return;
    }

    body.innerHTML = items.map(([key, item]) => `
      <div class="cart-item" data-key="${key}">
        <div class="cart-item-img">
          <img src="${item.product.img}" alt="${item.product.name}" loading="lazy" />
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.product.name}</p>
          <p class="cart-item-sub">${item.product.sub}</p>
          <p class="cart-item-size">Tamanho: ${item.size}</p>
          <p class="cart-item-price">${formatPrice(item.product.price * item.qty)}</p>
          <div class="cart-qty">
            <button class="cart-qty-btn" data-delta="-1" data-key="${key}">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" data-delta="1" data-key="${key}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-key="${key}" aria-label="Remover item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
            <path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>
    `).join('');

    // Listeners de qty e remover
    body.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeQty(btn.dataset.key, parseInt(btn.dataset.delta));
        });
    });
    body.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
    });

    document.getElementById('cartTotal').textContent = formatPrice(cartTotal());
    footer.style.display = 'block';
}

/* ==============================================================
   QUICK ADD (direto do card) → pede tamanho via modal produto
============================================================== */
// Já tratado acima via openProductModal(id, true)

/* ==============================================================
   NEWSLETTER
============================================================== */
document.querySelector('.newsletter-submit').addEventListener('click', () => {
    const input = document.querySelector('.newsletter-input');
    const email = input.value.trim();
    if (email && email.includes('@') && email.includes('.')) {
        showToast('Inscrição realizada com sucesso');
        input.value = '';
    } else {
        showToast('Por favor, insira um e-mail válido');
    }
});

/* ==============================================================
   UTILITÁRIOS
============================================================== */
function formatPrice(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* ==============================================================
   INICIALIZAÇÃO
============================================================== */
renderProducts();
updateCartBadge();
updateFavBadge();
