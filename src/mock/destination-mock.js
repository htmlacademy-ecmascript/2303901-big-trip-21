import {POINT_TYPES, CITIES, POINTS_COUNT, MAX_POINT_PRICE, MAX_OFFER_PRICE} from '../constants.js';
import {getRandomArrayElement, getRandomInteger} from '../utils.js';


export default class DestinationMock {
  constructor () {
    this.id = 'cfe416cq-10xa-ye10-8077-2fs9a01edcab';
    this.description = 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.';
    this.name = 'Chamonix';
    this.pictures = [
      {
        src : 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ];
  }
}


function destinationMocks () {
  const array = [];

  for (let i = 0; i < POINTS_COUNT; i++) {
    const pointMock = new DestinationMock;
    array.push(pointMock);
  }

  return array;
}

export{destinationMocks};
