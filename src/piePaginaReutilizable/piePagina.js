/**********************************************Selección de los elemento HTML******************************************************/
let piePaginaApp = document.getElementById('pie-pagina');
let refsApp = document.getElementById('referencia-1');

/**********************************************Creación de los elementos HTML******************************************************/
let contenedor = document.createElement('div');
let redWhatsapp = document.createElement('img');
let redFacebook = document.createElement('img');
let redInstagram = document.createElement('img');

/*Creando Enlaces----------------------------------------------------*/
let enlaceWhatsapp = document.createElement('a');
let enlaceFacebook = document.createElement('a');
let enlaceInstagram = document.createElement('a');

/*****************************************************Fragmentos*********************************************************************/
/*Imágenes------*/
const fragImagenes = document.createDocumentFragment();//Elemento Imágenes

/*************************************************Se Muestran las Imágenes***********************************************************/
redWhatsapp.innerHTML = redWhatsapp.src = '/Proyecto-final/src/resources/whatsapp.svg';
redFacebook.innerHTML = redFacebook.src = '/Proyecto-final/src/resources/facebook.svg';
redInstagram.innerHTML = redInstagram.src = '/Proyecto-final/src/resources/instagram.svg';

/*************************************************Rutas de las Imágenes***********************************************************/
enlaceWhatsapp.href = 'https://www.whatsapp.com/';
enlaceWhatsapp.target = 'Whatsapp';
enlaceFacebook.href = 'https://www.facebook.com/';
enlaceFacebook.target = 'facebook';
enlaceInstagram.href = 'https://www.instagram.com/';
enlaceInstagram.target = 'Instagram';

/************************************************Añadiendo Clases HTML***************************************************************/
redWhatsapp.classList.add('iconos');
redFacebook.classList.add('iconos');
redInstagram.classList.add('iconos');

/*Clases para Enlaces----------------------------------------------------*/
//enlaceWhatsapp.classList.add('');

/*Contenedor-------------------------------------------------*/
contenedor.classList.add('contenedor');

/********************************************Anexando Elementos al Contenedor********************************************************/
enlaceWhatsapp.appendChild(redWhatsapp);
enlaceFacebook.appendChild(redFacebook);
enlaceInstagram.appendChild(redInstagram);

contenedor.appendChild(enlaceWhatsapp);
contenedor.appendChild(enlaceFacebook);
contenedor.appendChild(enlaceInstagram);

/********************************************Anexando Elementos al Footer***********************************************************/
fragImagenes.appendChild(contenedor);

piePaginaApp.appendChild(refsApp);
piePaginaApp.appendChild(fragImagenes);