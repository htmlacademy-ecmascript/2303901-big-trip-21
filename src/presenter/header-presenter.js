import NewTaskFilterTimeView from '../views/new-task-filter-time-view.js';
import NewTaskHeaderTravelView from '../views/new-tack-header-cost-trip-view.js';
import {RenderPosition} from '../render.js';
import {render} from '../render.js';

export default class HeaderMainPresenter {
  tripFilterComponent = new NewTaskFilterTimeView();
  tripInfoComponent = new NewTaskHeaderTravelView();

  constructor ({tripInfoContainer, tripFilterContainer}) {
    this.tripInfoContainer = tripInfoContainer;
    this.tripFilterContainer = tripFilterContainer;
  }

  init() {
    render(this.tripInfoComponent, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(this.tripFilterComponent, this.tripFilterContainer, RenderPosition.AFTERBEGIN);
  }
}


