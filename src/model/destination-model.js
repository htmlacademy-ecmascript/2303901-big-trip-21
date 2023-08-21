import destinationMock from '../mock/destination-mock.js';

console.log(destinationMock);
export default class DestinationModel {

  constructor() {
    this.points = destinationMock;
  }

  getPoints() {

    return this.points;
  }
}
