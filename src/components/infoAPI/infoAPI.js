import "./infoAPI.css";
import { createCards } from "../card/Card";
import { endPoint, accesKey } from "../../../main";
let imagesList = {}
// Traigo la info de la API y llamo a Card.js para pintar las Cards.
export async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  if (imagesList.length === 0) {
    getImages('gatos');
    const modalNotification = document.getElementById('notification');
    modalNotification.style.display = 'flex';
  }
  else {
    createCards(imagesList);
  }
}
