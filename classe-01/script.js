const formulario = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

const img = document.querySelector('img');

formulario.addEventListener('submit', function (event){
	if (!inputSenha.value || !inputEmail.value) {
		event.preventDefault();
	}
});

img.addEventListener('click', function (){
	if (inputSenha.type === 'password') {
		inputSenha.type = 'text';
		img.src = 'assets/olho-aberto.svg';
	} else {
		inputSenha.type = 'password';
		img.src = 'assets/olho-fechado.svg';
	}
});