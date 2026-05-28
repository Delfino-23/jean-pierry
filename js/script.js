// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para renderizar produtos
function renderizarProdutos(produtosParaRender = produtos) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    produtosParaRender.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.dataset.categoria = produto.categoria;

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <div class="produto-info">
                <p class="produto-categoria">${produto.categoria}</p>
                <h3 class="produto-titulo">${produto.nome}</h3>
                <p class="produto-desc">${produto.descricao}</p>
                <div class="produto-tamanhos">
                    ${produto.tamanhos.map(tamanho =>
            `<button class="tamanho-opt" data-tamanho="${tamanho}">${tamanho}</button>`
        ).join('')}
                </div>
                <p class="produto-preco">R$ ${produto.preco.toFixed(2)}</p>
                <div class="produto-botoes">
                    <button class="btn-detalhes" onclick="verDetalhes(${produto.id})">Detalhes</button>
                    <button class="btn-carrinho" onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
                </div>
            </div>
        `;

        // Adicionar eventos para seleção de tamanho
        card.querySelectorAll('.tamanho-opt').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                card.querySelectorAll('.tamanho-opt').forEach(b => b.classList.remove('selecionado'));
                this.classList.add('selecionado');
                card.dataset.tamanhoSelecionado = this.dataset.tamanho;
            });
        });

        grid.appendChild(card);
    });
}

// Função para filtrar produtos
function filtrarProdutos(categoria) {
    const botoes = document.querySelectorAll('.filtro-btn');
    botoes.forEach(btn => btn.classList.remove('ativo'));
    event.target.classList.add('ativo');

    if (categoria === 'todos') {
        renderizarProdutos(produtos);
    } else {
        const produtosFiltrados = produtos.filter(p => p.categoria === categoria);
        renderizarProdutos(produtosFiltrados);
    }
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    const card = document.querySelector(`[data-categoria="${produto.categoria}"]`);
    const tamanhoSelecionado = card?.dataset.tamanhoSelecionado || 'M';

    const itemCarrinho = {
        id: Date.now(),
        produto: produto,
        tamanho: tamanhoSelecionado,
        quantidade: 1
    };

    carrinho.push(itemCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();

    // Feedback visual
    alert(`${produto.nome} (Tamanho ${tamanhoSelecionado}) adicionado ao carrinho!`);
}

// Função para atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const contador = document.getElementById('cart-count');
    if (contador) {
        contador.textContent = carrinho.length;
    }
}

// Função para ver detalhes do produto
function verDetalhes(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    alert(`
${produto.nome}
Preço: R$ ${produto.preco.toFixed(2)}
${produto.descricao}
Tamanhos disponíveis: ${produto.tamanhos.join(', ')}
    `);
}

// Função para scroll suave
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners para filtros
document.addEventListener('DOMContentLoaded', function () {
    // Renderizar produtos iniciais
    renderizarProdutos();
    atualizarContadorCarrinho();

    // Adicionar listeners aos botões de filtro
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const categoria = this.dataset.filtro;
            filtrarProdutos(categoria);
        });
    });

    // Envio do formulário de contato
    const formContato = document.querySelector('.form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            this.reset();
        });
    }
});
