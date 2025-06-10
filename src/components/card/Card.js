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

    document.querySelector("#containerCards").innerHTML +=
      `<div class="cardDiv">
          <div class="cardImgDiv" >
            <img class="imgImageDiv"/>
            <div class="initialIconsBox">
              <span class="camera">+${image.user.total_photos}</span>
              ${createButton({ texto: "Visitar", size: "l", classInfo: `visitar off center` })}
              <span class="likes">${image.likes}</span>
            </div>
          </div>  
          <div class="cardBottomPart">
            <img class="imgPersonRound"/>
            <p class="name"></p>
            <img class="upImg" />
            <p class="date"></p>
          </div>
        </div>`;

    // Información de cada carta
    let imgPersonRoundFile = document.getElementsByClassName(`imgPersonRound`);
    //console.log(imgPersonRoundFile);
    //console.log(image.user.profile_image.large);

    imgPersonRoundFile.src = image.user.profile_image.large;
    // console.log(image.user.profile_image.large);
    //console.log(imgPersonRoundFile.src);

    imgPersonRoundFile.bordercolor = "grey";
    let imgImageDivFile = document.getElementsByClassName(`imgImageDiv`);
    imgImageDivFile.src = `image.urls.thumb`;
    let nameFile = document.getElementsByClassName(`name`);
    nameFile.src = 'aaa000';
    nameFile.tex
    let imgCameraFile = document.getElementsByClassName(`camera`);
    imgCameraFile.content = "hola";
    /*  ${ image.user.name }; */


    /* ${image.created_at.substring(0, 10)} 
     */
  });

  /*   src="${image.user.profile_image.large}" style="border-color: ${randomColorImg}" */
  //Elementos comunes a las Cards
  /*   let upImgFile = document.getElementsByClassName(`upImg`);
    upImgFile.src = "./assets/upImage.png";
    let imgCameraFile = document.getElementsByClassName(`camera`);
    imgCameraFile.src = "./assets/camera.png";
    let imgLikesFile = document.getElementsByClassName(`likes`);
    imgLikesFile.src = "./assets/heart.png"; */
  /* 
  let buttonNotification = document.getElementsByClassName(`tryAgain`);
  buttonNotification[0].innerHTML = `¡Pulsa para intentarlo de nuevo!`;
 */

  /*  for (let i = 0; i < imagesList.length; i++) {
     
     const randomColorImg = getRandomColor();
 
     divMainContainer1.innerHTML +=
       `<div class="cardDiv">
           <div class="imageDiv${i} cardImgDiv" style="border: solid; background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('${imagesList[i].urls.thumb}'); ">
             <img class="imgImageDiv${i}" />
             <div class="initialIconsBox">
                     ${createButton({ size: "s", classInfo: `camera off on${i}` })}
               <div class="visitsBox">
                 ${createButton({ texto: "Visitar", size: "l", classInfo: `visitar off center on${i}` })}
               </div>
               ${createButton({ size: "s", classInfo: `heart off on${i}` })}
             </div>
           </div>  
           <div class="cardBottomPart">
             <img class="imgPersonRound" id="miImagenCanvas${i}" src="${imagesList[i].user.profile_image.large}" style="border-color: ${randomColorImg}"/>
             <p class="cardPUser${i} name">${imagesList[i].user.name} </p>
             <img src="./assets/upImage.png" class="upImg" />
             <p class="cardPDate${i} date">${imagesList[i].created_at.substring(0, 10)} </p>
           </div>
         </div>`;
 
     const imgButtonHeart = document.querySelector(`.heart`);
     imgButtonHeart.innerHTML = `<img class="imgHeart" src="./assets/heart.png" alt="pinterest">
           <span class="likesHeart">${imagesList[0].likes}</span>`
     const imgButtonCamera = document.querySelector(`.camera`);
     imgButtonCamera.innerHTML = `<img class="imgCamera" src="./assets/camera.png" alt="pinterest">
           <span class="likesHeart">+${imagesList[i].user.total_photos}</span>`
   } */
}
/* 
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
} */