import NewTaskFormSortFilterView from '../view/new-task-trip-sort-view.js';
import NewTaskFormEventView from '../view/new-task-trip-events-list-view.js';
import NewTaskFormEditEventView from '../view/new-task-trip-events-item.js';
import NewTaskListRoadView from '../view/new-task-trip-road-view.js';
import { render } from '../render.js';

const COUNT_ROADS = 3;

export default class TripEventsPresenter {
  tripSortComponent = new NewTaskFormSortFilterView();
  tripEventsComponent = new NewTaskFormEventView();

  constructor ({tripEventsContainer}) {
    this.tripEventsContainer = tripEventsContainer;
  }

  init() {
    render(this.tripSortComponent, this.tripEventsContainer);
    render(this.tripEventsComponent, this.tripEventsContainer);
    render(new NewTaskFormEditEventView (),this.tripEventsComponent.getElement());

    for (let i = 0; i < COUNT_ROADS; i++) {
      render(new NewTaskListRoadView, this.tripEventsComponent.getElement());
    }
  }
}
