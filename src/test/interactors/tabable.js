import { createInteractor, fillIn } from 'bigtest';

function dispatchKeyDown(element, options) {
  let KeyboardEvent = element.ownerDocument.defaultView?.KeyboardEvent || window.KeyboardEvent;
  return element.dispatchEvent(new KeyboardEvent('keydown', Object.assign({ bubbles: true, cancelable: true }, options)));
}

function dispatchKeyUp(element, options) {
  let KeyboardEvent = element.ownerDocument.defaultView?.KeyboardEvent || window.KeyboardEvent;
  return element.dispatchEvent(new KeyboardEvent('keyup', Object.assign({ bubbles: true, cancelable: true }, options)));
}



const tab = (el) => {
    dispatchKeyDown(el, { code: 9 })
    // dispatchKeyUp(el, { code: 9 })
}

export const Tabable = createInteractor('tabable')({
  selector: 'input[type=text]',
  locator: (element) => element.placeholder,
  filters: {
    value: (element) => element.value
  },
  actions: {
    fillIn: (interactor) => interactor.perform(fillIn),
    tabToNext: (interactor) => interactor.perform(tab),
  }
});