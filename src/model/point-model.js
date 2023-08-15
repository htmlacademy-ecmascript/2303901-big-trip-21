import pointsMocks from '../mock/point-mock.js';

export default class PointsModel {
  points = pointsMocks;

  getPoints() {

    return this.points;
  }
}


