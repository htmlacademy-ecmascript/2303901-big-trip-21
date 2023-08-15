import {POINT_TYPES, CITIES, POINTS_COUNT, MAX_POINT_PRICE, MAX_OFFER_PRICE} from '../constants.js';
import {getRandomArrayElement, getRandomInteger} from '../utils.js';


export default class PointMock {
  constructor (id) {
    this.id = id;
    this.basePrice = getRandomInteger(MAX_POINT_PRICE);
    this.sity = getRandomArrayElement(CITIES);
    this.offerPrice = getRandomInteger(MAX_OFFER_PRICE);
    this.type = getRandomArrayElement(POINT_TYPES);

  }
}


function pointsMocks () {
  const array = [];

  for(let i = 0; i < POINTS_COUNT; i++) {
    array.push(new PointMock(i));
  }

  return array;
}

console.log(pointsMocks());
export{pointsMocks};
