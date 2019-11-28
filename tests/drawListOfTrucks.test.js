import drawListOfTrucks from '../src/scripts/drawLists/drawListOfTrucks'

describe('drawListOfTrucks', () => {

    const truckAverageSpeed = 'truckAverageSpeed';
    const truckCapacity = 'truckCapacity';
    const truckId = 'truckId';
    const truckLicensePlate = 'truckLicensePlate';
    const truckModel = 'truckModel';
    const truckProducedYear = 'truckProducedYear';
    const truckTypeOfGas = 'truckTypeOfGas';

    const element = {
        truckAverageSpeed,
        truckCapacity,
        truckId,
        truckLicensePlate,
        truckModel,
        truckProducedYear,
        truckTypeOfGas,
    };

    const out = (
        '<li>' +
        '<ul>' +
        `<li><b>Truck Id:</b> ${truckId}</li>` +
        `<li><b>Truck Model:</b> ${truckModel}</li>` +
        `<li><b>Truck Produced year:</b> ${truckProducedYear}</li>` +
        `<li><b>Truck Capacity:</b> ${truckCapacity}</li>` +
        `<li><b>Truck License plate:</b> ${truckLicensePlate}</li>` +
        `<li><b>Truck Average speed:</b> ${truckAverageSpeed}</li>` +
        `<li><b>Truck Count of team:</b> ${truckTypeOfGas}</li>` +
        '</ul>' +
        '</li>'
    );
  
    const currentDraw = drawListOfTrucks('', element);
  
    it('Show draw', () => {
      expect(currentDraw).toBe(out);
    });
  });