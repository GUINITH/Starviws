
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('Email');
const assuntoInput = document.getElementById('Assunto');
const mensagemInput = document.getElementById('Mensagem');

form.addEventListener('submit', function (event) {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!nameInput.value || !telefoneInput.value || !emailInput.value || !assuntoInput.value || !mensagemInput.value) {
        event.preventDefault(); // Impede o envio do formulário se algum campo estiver vazio
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

