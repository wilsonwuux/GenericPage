//importa archivos CSS SCSS y los pasas a un archivo bundle JS lo cual los importa en nuestros elementos HTML 
import '../css/app.scss'

//importa archivos javascript y los pasa al bundle JS para permitir el us o en webpack de javascript 
import '../javascript/slider/sliderDom'

// importa funcionalidad de menu collapse
import '../javascript/menu/menu'

// validacion de service workers ss
if(navigator.serviceWorker)
navigator.serviceWorker.register('../sw.js');