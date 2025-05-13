const ENLACES = document.getElementById("enlaces");

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