class Funcionario {
    constructor(nome, cargo, salario) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    aumentarSalario(percentual) {
      this.salario += this.salario * (percentual / 100);
    }
  
    static calcularMediaSalarial(funcionarios) {
      const total = funcionarios.reduce((soma, f) => soma + f.salario, 0);
      return total / funcionarios.length;
    }
  }
  
  const listaFuncionarios = [];
  
  function adicionarFuncionario() {
    const nome = document.getElementById("nomefuncionario").value.trim();
    const cargo = document.getElementById("cargofuncionario").value.trim();
    const salario = parseFloat(document.getElementById("salariofuncionario").value.trim());
  
    if (!nome || !cargo || isNaN(salario)) {
      alert("Preencha todos os campos corretamente!");
      return;
    }
  
    const novoFuncionario = new Funcionario(nome, cargo, salario);
    listaFuncionarios.push(novoFuncionario);
  
    document.getElementById("nomefuncionario").value = '';
    document.getElementById("cargofuncionario").value = '';
    document.getElementById("salariofuncionario").value = '';
  
    listarFuncionarios();
  }
  
  function listarFuncionarios() {
    const resultado = document.getElementById("resultadofuncionario");
  
    if (listaFuncionarios.length === 0) {
      resultado.innerHTML = "<p>Nenhum funcionário cadastrado.</p>";
      return;
    }
  
    resultado.innerHTML = listaFuncionarios.map(f => `
      <p>
        Nome: ${f.nome}<br>
        Cargo: ${f.cargo}<br>
        Salário: R$ ${f.salario.toFixed(2)}
      </p>
    `).join("");
  }
  
  function aumentarSalario() {
    const nome = document.getElementById("nomeaumento").value.trim();
    const percentual = parseFloat(document.getElementById("percentualaumento").value.trim());
  
    if (!nome || isNaN(percentual)) {
      alert("Preencha todos os campos de aumento corretamente!");
      return;
    }
  
    const funcionario = listaFuncionarios.find(f => f.nome.toLowerCase() === nome.toLowerCase());
  
    if (!funcionario) {
      alert("Funcionário não encontrado!");
      return;
    }
  
    funcionario.aumentarSalario(percentual);
    listarFuncionarios();
  }
  
  function mostrarMediaSalarial() {
    if (listaFuncionarios.length === 0) {
      alert("Nenhum funcionário na lista para calcular a média.");
      return;
    }
  
    const media = Funcionario.calcularMediaSalarial(listaFuncionarios);
    document.getElementById("mediaSalarial").innerText = `Média Salarial: R$ ${media.toFixed(2)}`;
  }
  