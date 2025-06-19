import "./home.css";
import { createButton } from "../button/button";
//Pintar el HTML
export function pintarHTML() {
  document.querySelector("#app").innerHTML =
    `<header>
      <div class="headerContainer">
        <img class="iconePinterest">
        <div class="headerSearchContainer">
          <span class="icon">🔍</span>
          <input class="inputInfo" id="word" type="text">
        </div>
        <img class="desktopIconCampana">
        <img class="desktopIconComments">
        ${createButton({ texto: "D", size: "s", classInfo: "upRightButton" })}
      </div>
    </header> 
    <main> 
      <div id="notification">
        <h2 class="notificationH2"></h2>
        ${createButton({ size: "s", classInfo: `tryAgain` })}
      </div>
      <div id="containerCards"> </div>
    </main>`;
  /*   let imgPersonRoundFile1 = document.getElementsByClassName(`imgPersonRound1`);
    console.log(imgPersonRoundFile1);
    //console.log(image.user.profile_image.large);
    imgPersonRoundFile1.width = "400px";
    imgPersonRoundFile1.height = "400px";
  
    imgPersonRoundFile1.src = "./assets/camera.png"; */
};
//pruebas

//console.log(imgPersonRoundFile1.src);
let name1Text = document.getElementById("name1");

//name1Text.textContent = `ddd`;
//console.log(name1Text);

let date11 = document.getElementsByClassName("name1");
console.log(date11);

//Completar el header
export function completarHeader() {
  document.getElementById('word').placeholder = "Buscar...";
}





