import LocalStorage from './LocalStorage';
import DrawInDocument from './DrawInDocument';

const costTransportModel = document.querySelector('.costTransportModel');
const costCargo = document.querySelector('.costCargo');
const costDistance = document.querySelector('.costDistance');
const costBtn = document.querySelector('.cost__btn');

const costValues = (e) => {
  e.preventDefault();

  const currentLocalStorage = new LocalStorage();
  currentLocalStorage.setLocalStorage('Cost', {
    [costTransportModel.name]: costTransportModel.value,
    [costCargo.name]: costCargo.value,
    [costDistance.name]: costDistance.value,
  });

  costTransportModel.value = '';
  costCargo.value = '';
  costDistance.value = '';

  const add = new DrawInDocument();
  add.createCostElements();
};

export { costValues, costBtn };
