
const BOTON = document.getElementById("btn-sugerencia");
const FOOTER = document.getElementById("footer-comidas");
const BTN_SALIR = document.getElementById("btn-cerrar");

BOTON.addEventListener("click", footerNew);
BTN_SALIR.addEventListener("click", salir);

function footerNew() {
  
  BOTON.style.display = "none";
  FOOTER.style.margin = "20px auto";
  FOOTER.style.display = "block";

  FOOTER.innerHTML = `<section class="section">
    <div class="contenedor-footer">
      <div class="contenedor-texto">
        <h1 id="titulo-footer">POLLO CON VERDURAS</h1>
        <p id="parrafo-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi voluptas dicta sit ut numquam animi
          voluptatem, doloremque qui magni hic consequuntur commodi quidem laudantium, repellendus dignissimos fugit,
          aliquid temporibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis quaerat est accusamus voluptate accusantium sint doloremque architecto, illum voluptates dolore officia et distinctio explicabo, soluta nihil eius iste vero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate, iure laboriosam quam ducimus necessitatibus molestias soluta. Nostrum, aliquam ab. Tempora ullam repellat eius at officia libero culpa ea soluta.
        </p>
      </div>
      <div class="contenedor-img">
        <img src="/img/PolloConVerduras.png" alt="foto de pollo con verduras" id="img-pollo">
      </div>
    </div>
    <br>
  </section>`;

  FOOTER.innerHTML += `
  <section class="section">
  <div class="contenedor-footer">
      <div class="contenedor-texto">
        <h1 id="titulo-footer">VEGETALES SALTEADOS</h1>
        <p id="parrafo-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi voluptas dicta sit ut numquam animi
          voluptatem, doloremque qui magni hic consequuntur commodi quidem laudantium, repellendus dignissimos fugit,
          aliquid temporibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis quaerat est accusamus voluptate accusantium sint doloremque architecto, illum voluptates dolore officia et distinctio explicabo, soluta nihil eius iste vero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate, iure laboriosam quam ducimus necessitatibus molestias soluta. Nostrum, aliquam ab. Tempora ullam repellat eius at officia libero culpa ea soluta.
        </p>
      </div>
      <div class="contenedor-img">
        <img src="/img/VegetalesSalteados.png" alt="foto de vegetales salteados" id="img-vegetalesSalteados">
      </div>
    </div>
    <br>
    </section>`;

  FOOTER.innerHTML += `
  <section class="section">
  <div class="contenedor-footer">
      <div class="contenedor-texto">
        <h1 id="titulo-footer">OMELETTE DE VERDURAS</h1>
        <p id="parrafo-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi voluptas dicta sit ut numquam animi
          voluptatem, doloremque qui magni hic consequuntur commodi quidem laudantium, repellendus dignissimos fugit,
          aliquid temporibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis quaerat est accusamus voluptate accusantium sint doloremque architecto, illum voluptates dolore officia et distinctio explicabo, soluta nihil eius iste vero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate, iure laboriosam quam ducimus necessitatibus molestias soluta. Nostrum, aliquam ab. Tempora ullam repellat eius at officia libero culpa ea soluta.
        </p>
      </div>
      <div class="contenedor-img">
        <img src="/img/OmeletteConVerduras.png" alt="foto de omelette de verduras" id="img-omeletteConVerduras">
      </div>
    </div>
    <br>
  </section>`;

  BTN_SALIR.innerHTML+=`<button id="btn-salir" type="button">Cerrar</button>`;

  (BTN_SALIR.addEventListener("click", salir))&& salir();


}

function salir() {
  BOTON.style.display = "block";
  FOOTER.style.display = "none";
  FOOTER.style.margin = "0px auto";
  BTN_SALIR.innerHTML="";
  BTN_SALIR.style.display = "block";
  BTN_SALIR.style.cursor = "pointer";

}