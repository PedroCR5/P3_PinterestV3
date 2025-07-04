import "./infoAPI.css";
import { createCards } from "../card/Card";
import { endPoint, accesKey } from "../../../main";
export let imagesList = {}
// Traigo la info de la API y llamo a Card.js para pintar las Cards.
export async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  if (imagesList.length === 0) {

    const modalNotification = document.getElementById('notification');
    modalNotification.style.display = 'flex';
    modalNotification.className = 'on0';
    console.log(modalNotification)
    getImages('gatos');
  }
  else {
    createCards(imagesList);
    //firstCardInfo(imagesList);
  }
}
