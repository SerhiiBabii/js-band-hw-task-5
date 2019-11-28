import Ship from './Ship';
import Truck from './Truck';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["create"] }] */
class TransportFactory {
  create(type, ...args) {
    let transport = null;

    if (type === 'ship') {
      transport = new Ship(...args);
    } else if (type === 'truck') {
      transport = new Truck(...args);
    }
    return transport;
  }
}

export default TransportFactory;
