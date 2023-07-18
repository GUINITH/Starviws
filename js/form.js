document.getElementById('form').addEventListener('btn-form', (event)=>{
    event.preventDefault();
});

let nome = document.getElementById('name').value;
let email = document.getElementById('Email').value;
let telefone = document.getElementById('telefone').value;
let assunto = document.getElementById('Assunto').value;
let mensagem = document.getElementById('Mensagem').value;

console.log('Nome:', nome);
console.log('Email:', email);
console.log('Telefone:', telefone);
console.log('Assunto:', assunto);
console.log('Nome:', mensagem);