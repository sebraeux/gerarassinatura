// função que preenche o form
function generateEmail() {

  var email = document.querySelector('.conteudoResultado');

  //inputs
  var merchantName = document.querySelector('.InputName');
  var merchantCargo = document.querySelector('.InputCargo');
  var merchantUnidade = document.querySelector('.InputUnidade');
  var merchantNucleo = document.querySelector('.InputNucleo');
  var merchantTelefone = document.querySelector('.InputTelefone');
  var merchantEmail = document.querySelector('.InputEmail');

  //outputs
  var paragraphName = document.querySelector('.insertName');
  var paragraphCargo = document.querySelector('.insertCargo');
  var paragraphUnidade = document.querySelector('.insertUnidade');
  var paragraphNucleo = document.querySelector('.insertNucleo');
  var paragraphTelefone = document.querySelector('.insertTelefone');
  var paragraphEmail = document.querySelector('.insertEmail');

  // preenche
  paragraphName.textContent = merchantName.value;
  paragraphCargo.textContent = merchantCargo.value;
  paragraphUnidade.textContent = merchantUnidade.value;
  paragraphNucleo.textContent = merchantNucleo.value;
  paragraphTelefone.textContent = merchantTelefone.value;
  paragraphEmail.textContent = merchantEmail.value;
}

// Função para copiar o conteúdo da tabela com imagens e texto
document.getElementById('copiarConteudo').addEventListener('click', function () {
  const conteudo = document.getElementById('conteudoResultado').outerHTML;
  const blob = new Blob([conteudo], { type: 'text/html' });

  const item = new ClipboardItem({ "text/html": blob });
  navigator.clipboard.write([item]).then(function () {
    alert('Assinatura copiada com sucesso! Agora cole no seu Outlook');
  }).catch(function (error) {
    console.error('Erro ao copiar o conteúdo: ', error);
  });
});

// validação
$(function () {
  $("#gerarassinatura").on("click", function (e) {
      var form = $("#cadastroForm")[0];
      var isValid = form.checkValidity();
      if (!isValid) {
          e.preventDefault();
          e.stopPropagation();
      }
      form.classList.add('was-validated');
      return false; // For testing only to stay on this page
  });
});