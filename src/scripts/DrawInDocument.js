import LocalStorage from './LocalStorage';
import drawListOfTrucks from './drawLists/drawListOfTrucks';
import drawListOfShips from './drawLists/drawListOfShips';
import drawListOfCost from './drawLists/drawListOfCost';

/* eslint class-methods-use-this: ["error", {
  "exceptMethods": ["createTransportElements", "createCostElements"] }] */
class DrawInDocument {
  createTransportElements() {
    const currentLocalStorage = new LocalStorage();
    const transport = currentLocalStorage.getLocalStorage('Transports') || [];
    const result = document.querySelector('.list-transport');
    let out = '';

    if (transport.length > 0) {
      transport.forEach((element) => {
        if (element.type === 'truck') {
          out = drawListOfTrucks(out, element);
        }

        if (element.type === 'ship') {
          out = drawListOfShips(out, element);
        }

        result.innerHTML = out;
      });
    } else {
      result.innerHTML = '';
    }
  }

  createCostElements() {
    const currentLocalStorage = new LocalStorage();
    const cost = currentLocalStorage.getLocalStorage('Cost') || [];
    const result = document.querySelector('.list-cost');
    let out = '';

    if (cost.length > 0) {
      cost.forEach((element) => {
        out = drawListOfCost(out, element);
      });
      result.innerHTML = out;
    } else {
      result.innerHTML = '';
    }
  }
}

export default DrawInDocument;
