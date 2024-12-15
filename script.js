let carrinho = [];
let total = 0;

// Função para abrir/fechar o carrinho
function toggleCarrinho() {
    const carrinhoElement = document.getElementById("carrinho");
    carrinhoElement.style.display = carrinhoElement.style.display === "none" || carrinhoElement.style.display === "" ? "block" : "none";
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;
    atualizarCarrinho();
    alert(`${produto} adicionado ao carrinho!`);
}

// Função para atualizar o carrinho visualmente
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itens-carrinho");
    itensCarrinho.innerHTML = ""; // Limpa o carrinho

    carrinho.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item-carrinho");
        itemElement.innerHTML = `
            <span>${item.produto} - R$${item.preco.toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        itensCarrinho.appendChild(itemElement);
    });

    document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
    } else {
        alert("Compra finalizada! Obrigado pela preferência.");
        carrinho = [];
        total = 0;
        atualizarCarrinho();
        toggleCarrinho();
    }
}
