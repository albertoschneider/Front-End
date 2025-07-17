class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularTotal() {
      return this.preco * this.quantidade;
    }
  
    static calcularValorTotal(produtos) {
      return produtos.reduce((total, p) => total + p.calcularTotal(), 0);
    }
  }
  
  const listaProdutos = [];
  
  function adicionarProduto() {
    const nome = document.getElementById("nomeproduto").value.trim();
    const preco = parseFloat(document.getElementById("precoproduto").value.trim());
    const quantidade = parseInt(document.getElementById("quantidadeproduto").value.trim());
  
    if (!nome || isNaN(preco) || isNaN(quantidade)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }
  
    const novoProduto = new Produto(nome, preco, quantidade);
    listaProdutos.push(novoProduto);
  
    document.getElementById("nomeproduto").value = '';
    document.getElementById("precoproduto").value = '';
    document.getElementById("quantidadeproduto").value = '';
  
    listarProdutos();
  }
  
  function listarProdutos() {
    const resultado = document.getElementById("resultadoprodutos");
  
    if (listaProdutos.length === 0) {
      resultado.innerHTML = "<p>Nenhum produto cadastrado.</p>";
      return;
    }
  
    resultado.innerHTML = listaProdutos.map(p => `
      <p>
        Nome: ${p.nome}<br>
        Preço: R$ ${p.preco.toFixed(2)}<br>
        Quantidade: ${p.quantidade}
      </p>
    `).join("");
  }
  
  function calcularTotalProduto() {
    const nome = document.getElementById("nometotal").value.trim();
  
    if (!nome) {
      alert("Preencha o nome do produto.");
      return;
    }
  
    const produto = listaProdutos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
  
    if (!produto) {
      alert("Produto não encontrado!");
      return;
    }
  
    const total = produto.calcularTotal();
    document.getElementById("totalProduto").innerText = `Total do produto "${produto.nome}": R$ ${total.toFixed(2)}`;
  }
  
  function mostrarValorTotal() {
    if (listaProdutos.length === 0) {
      alert("Nenhum produto na lista.");
      return;
    }
  
    const totalGeral = Produto.calcularValorTotal(listaProdutos);
    document.getElementById("valorTotalEstoque").innerText = `Valor total em estoque: R$ ${totalGeral.toFixed(2)}`;
  }
  