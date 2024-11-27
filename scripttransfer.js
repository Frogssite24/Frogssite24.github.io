// Obtendo os elementos do formulário
var nome = document.getElementById('nome');
var valor = document.getElementById('valor');
var senha = document.getElementById('senha');
var botaosubmit = document.getElementById('botaosubmit');

  // Validação simples
  if (!valor.value || !senha.value) {
    alert('Por favor, preencha todos os campos!');
    return;
  }



