import {POINT_TYPES, CITIES_DESCRIPTIONS, CITIES, POINTS_COUNT, MAX_POINT_PRICE,MAX_PICTURES_COUNT, MAX_OFFER_PRICE} from '../constants.js';
import {getRandomArrayElement, getRandomInteger} from '../utils.js';

const randomId = self.crypto.randomUUID();

export default class DestinationMock {
  constructor () {
    this.id = randomId;
    this.description = getRandomArrayElement(CITIES_DESCRIPTIONS);
    this.name = getRandomArrayElement(CITIES);
    this.pictures = `http://picsum.photos/300/200${getRandomInteger(9)}r=0.0762563005163317`;
    //this.src = getRandomPictures(MAX_PICTURES_COUNT);
    //this.description = 'Chamonix parliament building';
  }

}

// function createDestinationMock  () {



// }


function destinationMocks () {

  const destinationMock = new DestinationMock;
  const array = [
    {
      id: destinationMock.id,
      description: destinationMock.description,
      name: destinationMock.name,
      pictures:[
        {
          src:destinationMock.pictures,
          description: 'Chamonix parliament building'
        }
      ]
    }
  ];


  console.log(destinationMock.id)

  return array;
}

console.log(destinationMocks());
export{destinationMocks};
