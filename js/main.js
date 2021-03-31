/*MENU DE NAVEGACION*/
const menu = document.querySelector('.menuNavegacion');
const linkContainer = document.querySelector('.contenedorLista');
const main = document.querySelector('#main');
const pegar = menu.offsetTop;
const btnMenu = document.querySelector('.btnMenu');
let on_off = true;

window.onscroll = () => {

	//MENU PEGADO
	if (window.pageYOffset >= pegar) {
       menu.classList.add('pegar');
       main.style.marginTop = '170px';
    }else{
        menu.classList.remove('pegar');
        main.style.marginTop = '100px'; 
    }

    //HOME
    if (window.pageYOffset >= 500) {
    	document.querySelector('.home').style.right = '0%';
    }else{
    	document.querySelector('.home').style.right = '-100%';
    }

    document.querySelector('.home').addEventListener('click', () => {
    	document.body.scrollTop = '0';
    	document.documentElement.scrollTop = '0';
    });
}

//MENU RESPONSIVO
btnMenu.addEventListener('click', () => {
	if (on_off) {
		linkContainer.style.left = '0';

		on_off = false;
	}else{
		on_off = false
		linkContainer.style.left = '-100%';

		on_off = true;
	}
});

//GALERIA MODAL
const images = document.querySelectorAll('.imgCard img');
const modal = document.querySelector('.galeriaModal');
const imgModal = document.querySelector('#imgModal');
const cierreModal = document.querySelector('.cierreModal');
const captionModal = document.querySelector('.captionModal');
const listaGaleria = document.querySelectorAll('.listaGaleria');

images.forEach((images) => {
	images.addEventListener('click', () => {
		modal.style.display = 'block';
		imgModal.src = images.src;
		captionModal.innerHTML = images.alt;
	});
});

listaGaleria.forEach(img  => img.addEventListener('click', lightbox));
	function lightbox  (event){
		imgModal.src = event.target.src;
		captionModal.innerHTML = event.target.alt;
	}

	cierreModal.addEventListener('click', () => {
    modal.style.display = "none";
});


