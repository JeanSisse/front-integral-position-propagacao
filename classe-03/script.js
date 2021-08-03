const bugImg = document.querySelectorAll('.img-container img');
const imgModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal');
const linkModal = document.querySelector('.modal a');

function abrirModal(src) {
	modal.style.display = 'flex';
	imgModal.src = src;
	linkModal.href = src;
}

bugImg.forEach(function (img){
	img.addEventListener('click', function (event){
		abrirModal(event.target.src);
	});
});

modal.addEventListener('click', function (){
	modal.style.display = 'none';
});

linkModal.addEventListener('click', function (event) {
	event.stopPropagation();
});