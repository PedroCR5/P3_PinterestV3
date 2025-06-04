import { accesKey, endPoint } from "../../../main";
export { element1Src, element2Src, elementName1InnerText, elementName2InnerText };

let element1Src;
let elementName1InnerText;
let element2Src;
let elementName2InnerText;

//! Traer información de personas para cartas
export async function infoPersons() {
  let firstPerson = await getImagesPerson('man');
  let secondPerson = await getImagesPerson('person');
  let element1Src = firstPerson[0].urls.small;
  let elementName1InnerText = firstPerson[0].user.first_name + " " + firstPerson[0].user.last_name;
  let element2Src = secondPerson[0].urls.small;
  let elementName2InnerText = secondPerson[8].user.first_name + " " + secondPerson[0].user.last_name;
}




export async function getImagesPerson(queryPerson) {
  let response = await fetch(endPoint + '?query=' + queryPerson + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesListP = await jsonResponse.results;
  if (queryPerson === 'person') {
    let firstPerson = imagesListP;
    return firstPerson;
  }
  else {
    let secondPerson = imagesListP;
    return secondPerson;
  }
}