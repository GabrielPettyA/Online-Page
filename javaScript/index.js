const ENLACES = document.getElementById("enlaces");
const footerContacto = document.getElementById("footerContacto");
const contactoEvent = document.getElementById("contactoEvent");

function cambiarOpcion(n){
  if(n == 1){
    document.getElementById("descripcion").innerHTML = `La alimentación es una parte esencial de la salud. Nos complace decir que la alimentación sana es la mejor forma de mantener una vida saludable. Si tiene alguna duda, contactenos por los distintos medios de comunicación que se encuentran a su disposición. Estamos aquí para ayudarle.`;
    document.getElementById("fotos").src = "/img/EnsaladaConPescado.png";
    document.getElementById("op1").className = "selected";
    document.getElementById("op2").className = "";
    document.getElementById("op3").className = "";
    const ALIMENTACION = ENLACES.innerHTML =`<a href= "../paginas/alimentacion.html" target="_blank">Más información aquí</a>`;    
  }
  if(n == 2){
    document.getElementById("descripcion").innerHTML = `Uno de los consejos del día es referido a la postura del cuerpo al momento de dormir. Esto puede parecer trivial, pero es muy importante para lograr una buena costumbre y hábitos saludables. Recuerde que al descansar nuestra columna, debemos tratar de mantenerla lo más relajada posible debido a que una mala postura, como puede ser la iperextensión, sobre todo en su zona lumbar, puede causar múltiples problemas en nuestra salud. Si desea mayor información, ingrese en nuestro enlace. Estamos aquí para ayudarle.`;
    document.getElementById("fotos").src = "/img/mujerPensando.png";
    document.getElementById("op1").className = "";
    document.getElementById("op2").className = "selected";
    document.getElementById("op3").className = "";
    const CONSEJOS = ENLACES.innerHTML =`<a href= "../paginas/consejos.html" target="_blank">Más información aquí</a>`;
  }
  if(n == 3){
    document.getElementById("descripcion").innerHTML = `Usted podrá encontrar las mejores recetas de cocina saludable en nuestra página. Si tiene alguna duda, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle.`;
    document.getElementById("fotos").src = "/img/CocinandoSaludable.png";
    document.getElementById("op1").className = "";
    document.getElementById("op2").className = "";
    document.getElementById("op3").className = "selected";
    const RECETASSALUDABLES = ENLACES.innerHTML =`<a href= "../paginas/recetasSaludables.html" target="_blank">Más información aquí</a>`;
  }
}

contactoEvent.addEventListener("click", functionEventoContacto);
function functionEventoContacto(){
  footerContacto.innerHTML = `
  <div id="contenedorContacto">
    <h1 id="titleContactos">CONTACTENOS:</h1>

    <a href="https://api.whatsapp.com/send?phone=+569891234567" target="_blank">
    <img id="icon" src="/javaScript/icon-footer/icon-contacto/Icon-WhatsApp.png" alt="Icono WhatsApp" title="Contactar por WhatsApp"/></a>

    <a href="https://www.telegram.com/gabrielpettinari/?hl=es-419" target="_blank"><img id="icon" src="/javaScript/icon-footer/icon-contacto/Icon-Telegram.png" alt="Icono Telegram" title="Envía mensaje al Telegram"/></a>

    <a href="https://www.snapchat.com/add/gabriel.pettinari" target="_blank">
    <img id="icon" src="/javaScript/icon-footer/icon-contacto/Icon-Snapchat.png" alt="Icono Snapchat" title="Contactar por Snapchat"/>
    </a>
  </div>

  <div id="contenedorEnlace">
    <h1 id="titleContactos">ENLACES ONLINE:</h1>
    <a href="" target="_blank"><img id="icon" src="/javaScript/icon-footer/icon-enlace/Icon-Instagram.png" alt="Icono Instagram" title="Ingresa al Instagram"/></a>

    <a href="" target="_blank">
    <img id="icon" src="/javaScript/icon-footer/icon-enlace/Icon-TikTok.png" alt="Icono TikTok" title="Ingresar al TikTok"/></a>

    <a href="" target="_blank">
    <img id="icon" src="/javaScript/icon-footer/icon-enlace/Icon-YouTube.png" alt="Icono YouTube" title="Dirigete a YouTube"/></a>

    <a href="" target="_blank">
    <img id="icon" src="/javaScript/icon-footer/icon-enlace/Icon-Facebook.png" alt="Icono Facebook" title="Ir al Facebook"/></a>

  </div>
  <div id="final"></div>
  `;
  footerContacto.style.backgroundColor = "rgb(88, 31, 31)";
  footerContacto.style.border = "4px groove rgb(12, 12, 12)";
}

const btnScrollTop = document.getElementById("btnScrollTop");
btnScrollTop.addEventListener("click", functionScrollTop);
function functionScrollTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"    
  });

  window.onscroll = () => {
    if (window.pageYOffset > 500) {
      btnScrollTop.style.display = "block";
    } else {
      btnScrollTop.style.display = "none";
    }
  }
}