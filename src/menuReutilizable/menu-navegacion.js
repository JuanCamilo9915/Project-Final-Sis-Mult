/**********************************************Selección del elemento HTML******************************************************/
let menuApp = document.getElementById('encabezado-app');

/**********************************************Creación de los elementos HTML******************************************************/
let logoTienda = document.createElement('img');//YA
let naveg = document.createElement('nav');//YA
let listaMenu = document.createElement('ul');//YA

/*****************************************************Logo Tienda de Ropa**********************************************************/
const fragmentLogoTienda = document.createDocumentFragment();//Elemento Logo Tienda

logoTiendaR(logoTienda, fragmentLogoTienda);//Agrega el logo de la tienda al menú

/*****************************************************Navegación**********************************************************/
navegaMenu(naveg);//Agrega la clase nav-menu

/*****************************************************Lista Desordenada Principal********************************************/
listaPrinMenu(listaMenu);//Agrega la clase lista-principal sub-lista

/*****************************************************Listas Desordenadas**********************************************************/
let menuItems = ["/src/resources/home.svg", "Tienda", "Carrito"];
let rutasEnlaces = ["#", "#", "#"];

/*****************************************************Fragmentos*********************************************************************/
/*Navegación------*/
const fragmentnav = document.createDocumentFragment();//Elemento nav

/*Menú------*/
const fragListaMenu = document.createDocumentFragment();//Elemento menú

/*listaMenu-------*/
const listaItemsP4 = document.createDocumentFragment();//Parrafos
const elementoLi4 = document.createDocumentFragment();//Elemento LI

/*****************************************************Funciones*********************************************************************/
/*listaMenu------------------------------------------------------------------------------------------------------------------*/
function menuHome(home, elementoItemLi, i) {

   let contentA1 = document.createElement('a');
   let contentP1 = document.createElement('p');

   home.innerHTML = home.src = menuItems[i];
   contentA1.href = rutasEnlaces[i];   
   contentA1.appendChild(home);
   
   contentP1.appendChild(contentA1);
   contentP1.classList.add('items-menu-p');
   listaItemsP4.appendChild(contentP1);//Fragmento

   elementoItemLi.appendChild(listaItemsP4);
   elementoLi4.appendChild(elementoItemLi);
}
/*--//////////////////////////////////////////--*/
function menu(textoP, elementoItemLi, i) {

   let contentA2 = document.createElement('a');
   let negrita = document.createElement('b');

   contentA2.href = rutasEnlaces[i];
   negrita.innerHTML = menuItems[i];
   contentA2.appendChild(negrita);
   textoP.appendChild(contentA2);
   listaItemsP4.appendChild(textoP);//Fragmento

   elementoItemLi.appendChild(listaItemsP4);
   elementoLi4.appendChild(elementoItemLi);
}

/*Asociando el Logo de la Tienda al menú de navegación-----------------------------------------------------------------------------*/
function logoTiendaR(logoTienda, fragmentLogoTienda) {
   logoTienda.innerHTML = logoTienda.src = '/src/resources/logo-tienda.png';
   logoTienda.classList.add('logo');//Se le agrega la clase logo
   fragmentLogoTienda.appendChild(logoTienda);
}

/*Añadiendo clase de la Lista principal-----------------------------------------------------------------------------*/
function navegaMenu(naveg) {
   naveg.classList.add('nav-menu');
}

/*Añadiendo clase de la Lista Principal-----------------------------------------------------------------------------*/
function listaPrinMenu(listaMenu) {
   listaMenu.classList.add('lista-principal');
}

/*****************************************************Bucles*********************************************************************/
/*listaMenu------------------------------------------------------------------------------------------------------------------*/
for (let i = 0; i < menuItems.length; i++) {

   let elementoItemLi = document.createElement('li');
   elementoItemLi.classList.add('items-menu');//Agrega la clase items-menu

   switch (i) {
      case 0:

         let home = document.createElement('img');
         home.classList.add('home');//Agrega la clase home

         menuHome(home, elementoItemLi, i);

         break;

      default:

         let textoP = document.createElement('p');
         textoP.classList.add('items-menu-p');

         menu(textoP, elementoItemLi, i);//Se asignan los hijos de los elementos

         break;
   }

}

/********************************************Anexando Elementos al Header***********************************************************/
listaMenu.appendChild(elementoLi4);
//listaMenu.appendChild(elementoLi1);
fragListaMenu.appendChild(listaMenu);

naveg.appendChild(fragListaMenu);
fragmentnav.appendChild(naveg);

menuApp.appendChild(fragmentLogoTienda);
menuApp.appendChild(fragmentnav);