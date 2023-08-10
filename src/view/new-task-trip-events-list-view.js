import {createElement} from '../render.js';

function createNewTaskEventsListTemplate () {
  return `
    <ul class="trip-events__list">
  `;
}

export default class NewTaskFormEventView {
  getTemplate() {
    return createNewTaskEventsListTemplate ();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
