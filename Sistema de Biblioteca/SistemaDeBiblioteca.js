class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
  
    emprestar() {
      this.disponivel = false;
    }
  
    devolver() {
      this.disponivel = true;
    }
  
    static contarDisponiveis(livros) {
      return livros.filter(l => l.disponivel).length;
    }
  }
  
  const listaLivros = [];
  
  function adicionarLivro() {
    const titulo = document.getElementById("titulolivro").value.trim();
    const autor = document.getElementById("autorlivro").value.trim();
  
    if (!titulo || !autor) {
      alert("Preencha todos os campos.");
      return;
    }
  
    const novoLivro = new Livro(titulo, autor);
    listaLivros.push(novoLivro);
  
    document.getElementById("titulolivro").value = '';
    document.getElementById("autorlivro").value = '';
  
    listarLivros();
  }
  
  function listarLivros() {
    const container = document.getElementById("listalivros");
  
    if (listaLivros.length === 0) {
      container.innerHTML = "<p>Nenhum livro cadastrado.</p>";
      return;
    }
  
    container.innerHTML = listaLivros.map(l => `
      <p>
        Título: ${l.titulo}<br>
        Autor: ${l.autor}<br>
        Disponível: ${l.disponivel ? 'Sim' : 'Não'}
      </p>
    `).join("");
  }
  
  function emprestarLivro() {
    const titulo = document.getElementById("tituloEmprestimo").value.trim();
    const livro = listaLivros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  
    if (!livro) {
      alert("Livro não encontrado.");
      return;
    }
  
    if (!livro.disponivel) {
      alert("Este livro já está emprestado.");
      return;
    }
  
    livro.emprestar();
    listarLivros();
    alert(`Livro "${livro.titulo}" emprestado com sucesso.`);
  }
  
  function devolverLivro() {
    const titulo = document.getElementById("tituloDevolucao").value.trim();
    const livro = listaLivros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  
    if (!livro) {
      alert("Livro não encontrado.");
      return;
    }
  
    if (livro.disponivel) {
      alert("Este livro já está disponível.");
      return;
    }
  
    livro.devolver();
    listarLivros();
    alert(`Livro "${livro.titulo}" devolvido com sucesso.`);
  }
  
  function contarLivrosDisponiveis() {
    const total = Livro.contarDisponiveis(listaLivros);
    document.getElementById("totalDisponiveis").innerText = `Total de livros disponíveis: ${total}`;
  }
  