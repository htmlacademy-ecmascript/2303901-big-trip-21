import NewTaskFormSortFilterView from '../views/new-task-trip-sort-view.js';
import NewTaskFormEventView from '../views/new-task-trip-events-list-view.js';
import NewTaskFormEditEventView from '../views/new-task-trip-events-item.js';
import NewTaskListRoadView from '../views/new-task-trip-road-view.js';
import {render} from '../render.js';

const COUNT_ROADS = 10;

export default class TripEventsPresenter {
  tripSortComponent = new NewTaskFormSortFilterView();
  tripEventsComponent = new NewTaskFormEventView();

  constructor (tripEventsContainer, pointsModel) {
    this.tripEventsContainer = tripEventsContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    //this.listPoints = [...this.pointsModel.getPoints()];

    render(this.tripSortComponent, this.tripEventsContainer);
    render(this.tripEventsComponent, this.tripEventsContainer);
    render(new NewTaskFormEditEventView,this.tripEventsComponent.getElement());

    for (let i = 0; i < COUNT_ROADS; i++) {
      render(new NewTaskListRoadView(this.pointsModel.getPoints()), this.tripEventsComponent.getElement());
    }
  }

}
