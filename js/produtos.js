// Base de dados de produtos
const produtos = [
    {
        id: 1,
        nome: "Camiseta Básica Branca",
        categoria: "camisetas",
        preco: 49.90,
        descricao: "Camiseta 100% algodão, confortável e versátil",
        imagem: "https://via.placeholder.com/250?text=Camiseta+Branca",
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        id: 2,
        nome: "Camiseta Estampada",
        categoria: "camisetas",
        preco: 59.90,
        descricao: "Camiseta com estampa exclusiva",
        imagem: "https://via.placeholder.com/250?text=Camiseta+Estampada",
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        id: 3,
        nome: "Calça Jeans Azul",
        categoria: "calças",
        preco: 129.90,
        descricao: "Calça jeans confortável e durável",
        imagem: "https://via.placeholder.com/250?text=Calça+Jeans",
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        id: 4,
        nome: "Calça Preta Elegante",
        categoria: "calças",
        preco: 119.90,
        descricao: "Calça preta perfeita para qualquer ocasião",
        imagem: "https://via.placeholder.com/250?text=Calça+Preta",
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        id: 5,
        nome: "Vestido Floral",
        categoria: "vestidos",
        preco: 149.90,
        descricao: "Vestido floral elegante e feminino",
        imagem: "https://via.placeholder.com/250?text=Vestido+Floral",
        tamanhos: ["P", "M", "G"]
    },
    {
        id: 6,
        nome: "Vestido Preto Chic",
        categoria: "vestidos",
        preco: 159.90,
        descricao: "Vestido preto sofisticado para eventos",
        imagem: "https://via.placeholder.com/250?text=Vestido+Preto",
        tamanhos: ["P", "M", "G"]
    },
    {
        id: 7,
        nome: "Jaqueta de Couro",
        categoria: "jaquetas",
        preco: 299.90,
        descricao: "Jaqueta de couro genuína e impermeável",
        imagem: "https://via.placeholder.com/250?text=Jaqueta+Couro",
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        id: 8,
        nome: "Jaqueta Jeans",
        categoria: "jaquetas",
        preco: 189.90,
        descricao: "Jaqueta jeans clássica e versátil",
        imagem: "https://via.placeholder.com/250?text=Jaqueta+Jeans",
        tamanhos: ["P", "M", "G", "GG"]
    }
];

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = produtos;
}
