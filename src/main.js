import HeaderMainPresenter from './presenter/header-presenter.js';
import TripEventsPresenter from './presenter/main-presenter.js';

const siteBodyElement = document.querySelector('.page-header');
const siteTripInfo = siteBodyElement.querySelector('.trip-main');
const placeFilerHeader = siteBodyElement.querySelector('.trip-controls__filters');
const headerMainPresenter = new HeaderMainPresenter({tripInfoContainer: siteTripInfo, tripFilterContainer: placeFilerHeader});
const siteMainElement = document.querySelector('.page-main');
const placeEventsMain = siteMainElement.querySelector('.trip-events');
const mainEventsPresenter = new TripEventsPresenter({tripEventsContainer: placeEventsMain});

headerMainPresenter.init();
mainEventsPresenter.init();
