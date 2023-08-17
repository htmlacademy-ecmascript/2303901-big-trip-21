import pointsMocks from '../mock/point-mock.js';

console.log(pointsMocks)
export default class PointsModel {

  constructor() {
    this.points = pointsMocks;
  }

  getPoints() {

    return this.points;
  }
}


