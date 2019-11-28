import DrawInDocument from './DrawInDocument';
import { shipValues, shipBtn } from './shipVariables';
import { truckValues, truckBtn } from './truckVariables';
import { costValues, costBtn } from './costVariables';

truckBtn.addEventListener('click', truckValues);
shipBtn.addEventListener('click', shipValues);
costBtn.addEventListener('click', costValues);

const add = new DrawInDocument();
add.createTransportElements();
add.createCostElements();
