import HeaderMainPresenter from './presenter/header-presenter.js';


import NewTaskFormSortFilterView from './view/new-task-trip-sort-view.js';
import NewTaskFormEventView from './view/new-task-trip-events-list-view.js';
import NewTaskFormEditEventView from './view/new-task-trip-events-item.js';
import NewTaskListRoadView from './view/new-task-trip-road-view.js';
import {render} from './render.js';


const siteBodyElement = document.querySelector('.page-header');
const siteTripInfo = siteBodyElement.querySelector('.trip-main');
const placeFilerHeader = siteBodyElement.querySelector('.trip-controls__filters');
const headerMainPresenter = new HeaderMainPresenter({tripInfoContainer: siteTripInfo, tripFilterContainer: placeFilerHeader});


const siteMainElement = document.querySelector('.page-main');
const placeEventsMain = siteMainElement.querySelector('.trip-events');


render(new NewTaskFormSortFilterView(), placeEventsMain);
render(new NewTaskFormEventView(), placeEventsMain);

const placeFormEventsMain = placeEventsMain.querySelector('.trip-events__list');
render(new NewTaskFormEditEventView(), placeFormEventsMain);


for(let i = 0; i <= 3; i++){
  render(new NewTaskListRoadView(), placeFormEventsMain);
}

headerMainPresenter.init();
