import TransportFactory from '../src/scripts/models/TransportFactory';

describe('Create transport', () => {
  const idTruck = 'idTruck';
  const modelTruck = 'modelTruck';
  const licensePlateTruck = 'licensePlateTruck';
  const producedYearTruck = 'producedYearTruck';
  const capacityTruck = 'capacityTruck';
  const averageSpeedTruck = 'averageSpeedTruck';
  const typeOfGasTruck = 'typeOfGasTruck';

  const idShip = 'idShip';
  const modelShip = 'modelShip';
  const nameShip = 'nameShip';
  const producedYearShip = 'producedYearShip';
  const capacityShip = 'capacityShip';
  const averageSpeedShip = 'averageSpeedShip';
  const countOfTeamShip = 'countOfTeamShip';

  const transport = new TransportFactory();

  const currentTruck = transport.create(
    'truck',
    idTruck,
    modelTruck,
    licensePlateTruck,
    producedYearTruck,
    capacityTruck,
    averageSpeedTruck,
    typeOfGasTruck,
  );

  const currentShip = transport.create(
    'ship',
    idShip,
    modelShip,
    nameShip,
    producedYearShip,
    capacityShip,
    averageSpeedShip,
    countOfTeamShip,
  );

  it('Show truckFactory capacity in pounds', () => {
    expect(currentTruck.showCapacityInPounds()).toBe(capacityTruck);
  });
  it('Show truckFactory average speed', () => {
    expect(currentTruck.showAverageSpeed()).toBe(`${averageSpeedTruck}km`);
  });
  it('Show shipFactory capacity in pounds', () => {
    expect(currentShip.showCapacityInPounds()).toBe(capacityShip);
  });
  it('Show shipFactory average speed', () => {
    expect(currentShip.showAverageSpeed()).toBe(`${averageSpeedShip}nm`);
  });
});
