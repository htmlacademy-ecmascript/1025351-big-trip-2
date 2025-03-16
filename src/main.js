import { render } from './render';
import FiltersView from './view/filters-view';
import TripPresenter from './presenter/trip-presenter';

const controlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({pointsContainer: tripEventsElement});

render(new FiltersView(), controlsFiltersElement);

tripPresenter.init();
