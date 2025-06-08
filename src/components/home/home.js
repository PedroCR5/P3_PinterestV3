import { createButton } from "../button/button";
export function pintarHTML() {
  document.querySelector("#app").innerHTML =
    `<header>
      <div class="headerContainer">
        <img class="iconePinterest">
        <div class="headerSearchContainer">
          <span class="icon">🔍</span>
          <input class="inputInfo" id="word" type="text" placeholder=" Buscar...">
        </div>
        <img class="desktopIconCampana">
        <img class="desktopIconComments">
        ${createButton({ texto: "D", size: "s", classInfo: "upRightButton buttonInfo1" })}
      </div>
    </header> 
    <main> 
      <div class="notification" id="notification">
        <h2 class="notificationH2">¡Busqueda errónea!, por favor inténtalo con palabras como gato, perro...</h2>
        ${createButton({ texto: "Pulsa aquí para intentarlo de nuevo", size: "s", classInfo: `tryAgain` })}
      </div>
      <div id="containerCards"> </div>
    </main>`;
};
