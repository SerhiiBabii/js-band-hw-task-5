import LocalStorage from './LocalStorage';
import DrawInDocument from './DrawInDocument';
import TransportFactory from './models/TransportFactory';

const truckId = document.querySelector('.truckId');
const truckModel = document.querySelector('.truckModel');
const truckLicensePlate = document.querySelector('.truckLicensePlate');
const truckProducedYear = document.querySelector('.truckProducedYear');
const truckCapacity = document.querySelector('.truckCapacity');
const truckAverageSpeed = document.querySelector('.truckAverageSpeed');
const truckTypeOfGas = document.querySelector('.truckTypeOfGas');

const truckBtn = document.querySelector('.truck__btn');

const truckValues = (e) => {
  e.preventDefault();

  const transport = new TransportFactory();
  const currentTruck = transport.create(
    'truck',
    truckId.value,
    truckModel.value,
    truckLicensePlate.value,
    truckProducedYear.value,
    truckCapacity.value,
    truckAverageSpeed.value,
    truckTypeOfGas.value,
  );

  currentTruck.showAverageSpeed();
  currentTruck.showCapacityInPounds();

  const currentLocalStorage = new LocalStorage();

  currentLocalStorage.setLocalStorage('Transports', {
    type: 'truck',
    [truckAverageSpeed.name]: truckAverageSpeed.value,
    [truckCapacity.name]: truckCapacity.value,
    [truckId.name]: truckId.value,
    [truckLicensePlate.name]: truckLicensePlate.value,
    [truckModel.name]: truckModel.value,
    [truckProducedYear.name]: truckProducedYear.value,
    [truckTypeOfGas.name]: truckTypeOfGas.value,
  });

  truckAverageSpeed.value = '';
  truckCapacity.value = '';
  truckId.value = '';
  truckLicensePlate.value = '';
  truckModel.value = '';
  truckProducedYear.value = '';
  truckTypeOfGas.value = '';

  const add = new DrawInDocument();
  add.createTransportElements();
};

export { truckValues, truckBtn };
