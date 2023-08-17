import {getRandomArrayElement, getRandomInteger, generateAndPrintRandomDescription} from '../utils.js';
import {POINT_TYPES, CITIES, POINTS_COUNT, MAX_POINT_PRICE, MAX_OFFER_PRICE } from '../constants.js';



//const descriptionDateAndTime = generateAndPrintRandomDescription();

//console.log(descriptionDateAndTime);
export default class PointMock {

  constructor() {
    this.id = getRandomInteger(MAX_OFFER_PRICE);
    this.basePrice = getRandomInteger(MAX_POINT_PRICE);
    this.descriptionTime = generateAndPrintRandomDescription();
    this.city = getRandomArrayElement(CITIES);
    this.offerPrice = getRandomInteger(MAX_OFFER_PRICE);
    this.type = getRandomArrayElement(POINT_TYPES);
    this.isFavorite = Boolean(getRandomInteger(2));
  }
}


function pointsMocks () {
  const array = [];

  for (let i = 0; i < POINTS_COUNT; i++) {
    const pointMock = new PointMock;
    array.push(pointMock);
  }

  return array;
}

export{pointsMocks};
