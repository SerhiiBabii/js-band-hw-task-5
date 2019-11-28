import LocalStorage from './LocalStorage';
import DrawInDocument from './DrawInDocument';
import TransportFactory from './models/TransportFactory';

const shipId = document.querySelector('.shipId');
const shipModel = document.querySelector('.shipModel');
const shipName = document.querySelector('.shipName');
const shipProducedYear = document.querySelector('.shipProducedYear');
const shipCapacity = document.querySelector('.shipCapacity');
const shipAverageSpeed = document.querySelector('.shipAverageSpeed');
const shipCountOfTeam = document.querySelector('.shipCountOfTeam');
const shipBtn = document.querySelector('.ship__btn');

const shipValues = (e) => {
  e.preventDefault();

  const transport = new TransportFactory();
  const currentShip = transport.create(
    'ship',
    shipId.value,
    shipModel.value,
    shipName.value,
    shipProducedYear.value,
    shipCapacity.value,
    shipAverageSpeed.value,
    shipCountOfTeam.value,
  );

  currentShip.showAverageSpeed();
  currentShip.showCapacityInPounds();

  const currentLocalStorage = new LocalStorage();

  currentLocalStorage.setLocalStorage('Transports', {
    type: 'ship',
    [shipAverageSpeed.name]: shipAverageSpeed.value,
    [shipCapacity.name]: shipCapacity.value,
    [shipId.name]: shipId.value,
    [shipName.name]: shipName.value,
    [shipModel.name]: shipModel.value,
    [shipProducedYear.name]: shipProducedYear.value,
    [shipCountOfTeam.name]: shipCountOfTeam.value,
  });

  shipAverageSpeed.value = '';
  shipCapacity.value = '';
  shipId.value = '';
  shipName.value = '';
  shipModel.value = '';
  shipProducedYear.value = '';
  shipCountOfTeam.value = '';

  const add = new DrawInDocument();
  add.createTransportElements();
};

export { shipValues, shipBtn };
