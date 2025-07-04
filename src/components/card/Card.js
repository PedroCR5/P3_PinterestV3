import { createButton } from "../button/button";
import "./card.css";

// Color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Función crear cartas
export function createCards(imagesList) {
  document.querySelector("#containerCards").innerHTML = ` `;
  imagesList.forEach(image => {
    let randomColorImg = getRandomColor();
    document.querySelector("#containerCards").innerHTML +=
      `<div class="cardDiv">
            <img class="imgImageDiv" src=${image.urls.small} loading = "lazy";/>
            <img class="imgPersonRound" src=${image.user.profile_image.large} style="border-color: ${randomColorImg}" />
            <p class="name">${image.user.name} </p>
            <p class="date">${image.created_at.substring(0, 10)} </p>
            <img class="upImg" src="./assets/upImage.png"/>
        </div>`;
  });
  //Primer Card Div
  const primerCardDiv = document.getElementsByTagName('div')[5];
  primerCardDiv.className = "cardDiv holahola"
  console.log(primerCardDiv);
  primerCardDiv.innerHTML +=
    `<div class="initialIconsBox">
        <div class="cameraLikesContainer">
          <span class="camera"></span>
          <span class="cameraNumber">+${imagesList[0].user.total_photos}</span>
        </div>
          ${createButton({ texto: "Visitar", size: "l", classInfo: `visitar off` })}
        <div class="cameraLikesContainer">
           <span class="likes"></span>
            <span class="likesNumber">${imagesList[0].likes}</span>
        </div>
              </div>`
}