import Truck from '../src/scripts/models/Truck';

describe('Create transport', () => {
  const id = 'id';
  const licensePlate = 'licensePlate';
  const typeOfGas = 'typeOfGas';
  const model = 'model';
  const capacity = 'capacity';
  const producedYear = 'producedYear';
  const averageSpeed = 'averageSpeed';

  const currentTruck = new Truck(
    id,
    model,
    licensePlate,
    producedYear,
    capacity,
    averageSpeed,
    typeOfGas,
  );

  it('Show truck capacity in pounds', () => {
    expect(currentTruck.showCapacityInPounds()).toBe(capacity);
  });
  it('Show truck average speed', () => {
    expect(currentTruck.showAverageSpeed()).toBe(`${averageSpeed}km`);
  });
});
