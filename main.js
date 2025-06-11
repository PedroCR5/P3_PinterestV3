import './style.css';
import { getImages } from './src/components/infoAPI/infoAPI';
import { funcionAEjecutar, prepararElModal } from './src/components/modal/modal';
import { completarHeader, pintarHTML } from './src/components/home/home';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';

//Variables
let firstWord = 'nada de nada';

// Pinto el HTML
pintarHTML();
completarHeader();

// El modal
prepararElModal();
const modalButton = document.querySelector(".tryAgain");
modalButton.addEventListener("click", funcionAEjecutar);


//Traer información inicial de la API y pintarla
getImages('dog');

//Guardo la primera palabra de busqueda, voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    if (firstWord === 'nada de nada') {
      firstWord = event.target.value;
    }
    getImages(`${valorInput}`);
    event.target.value = '';
  }
});

// Pinchar en icono Pinterest para refrescar la primera búsqueda
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstWord)
  };
};


/* <div class="desktopHeader">
      ${createButton({ texto: "Inicio", size: "s", classInfo: `desktopButton initial buttonInfo1` })}
      ${createButton({ texto: "Explorar", size: "s", classInfo: `desktopButton buttonInfo1` })}
      ${createButton({ texto: "Crear", size: "s", classInfo: `desktopButton buttonInfo1` })}
    </div> */


/* Buenas Pedro,

Estoy revisando tu proyecto por segunda vez y veo que todavía no estás dando con lo esencial. Da la sensación de que tienes bastante confusión con varios conceptos, y no termino de entender de dónde los has sacado, pero la mayoría están mal enfocados.

La única funcionalidad que está bien es el tema de las peticiones. El resto, sinceramente, no está correcto.

Empezamos por el main.js:

//Tienes variables como element1Src, intertext… que no deberían estar ahí.
//El pintado de la página principal lo estás haciendo todo con template literals, que se puede, pero tienes muchos fallos: repetición de IDs, clases mal puestas, semántica poco clara…
//Un punto positivo es tu componente createButton, que no está mal.
//Luego tienes la lógica del modal de error y el buscador, que más o menos vale.
//No se entiende muy bien por qué haces dos fetch: uno para la info de la persona y otro para las imágenes.

Pero lo más preocupante es cómo estás iterando los datos de las peticiones:

Estás haciendo la iteración dentro de la función, pasándole el resultado directamente. Eso ya es raro, pero vale, podría pasar. El problema es cómo lo haces: usas un for loop, concatenas todo mezclando lógica de pintado con botones, backgrounds, dejas un img vacío pero lo creas igual… Coges fechas, haces substrings, botones de like, cámara… todo metido a la vez, sin orden ni claridad.

//Y luego haces dos loops, uno de 4 y otro de 10, que sinceramente, sigo sin entender para qué.

Te voy a resumir cómo deberías plantearlo desde la HOME y, sobre todo, desde el punto en el que recibes los datos. La API te devuelve 10 elementos ahora, y deberías pintarlos con una iteración limpia y coherente, usando los datos originales de forma simple.

1. Explora siempre con un console.log el resultado de la petición
Mira lo que te devuelve la llamada. Por ejemplo:

data
data
777×618 35.6 KB
Tienes un montón de datos: alt de las imágenes, blurhash, colores, descripciones, likes, usuario, nombre completo, ubicación… puedes usar todo eso directamente.

2. Crea un template reutilizable
Una función sencilla que pinte cada resultado de forma homogénea:

const CardTemplate = (result) => {
  return `
    <div class="card">
      <img src="${result.urls.small}" alt="${result.alt_description}">
      <div class="card-info">
        <h3>${result.user.name}</h3>
        <p>${result.description || 'No description available'}</p>
        <span>${result.likes} likes</span>
      </div>
    </div>
  `;
}
3. Itera de forma clara
Cuando recibas los datos:

results.forEach(result => {
  container.innerHTML += CardTemplate(result);
});
Así cada tarjeta tendrá siempre la misma estructura, y no necesitas más lógica de la cuenta.

La primera búsqueda que haces funciona, no es la más eficiente, pero al menos va. Aun así, te recomendaría repasar el módulo y mirar bien las clases en directo, te vendría muy bien.

Te vuelvo a corregir cuando implementes algo más parecido a lo que te acabo de dejar. Investiga un poco más, y ánimo con ello.

Un saludo! */
//? Modal meterle info svh
//? Animación para algún img, @keyframes
//? que no salga erroe al pinchar en logo Pinterest
//? eliminar clases innecesarias
//? simplificar los css