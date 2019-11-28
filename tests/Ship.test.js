import Ship from '../src/scripts/models/Ship';

describe('Create transport', () => {
  const id = 'id';
  const name = 'name';
  const countOfTeam = 'countOfTeam';
  const model = 'model';
  const capacity = 'capacity';
  const producedYear = 'producedYear';
  const averageSpeed = 'averageSpeed';

  const currentShip = new Ship(
    id,
    model,
    name,
    producedYear,
    capacity,
    averageSpeed,
    countOfTeam,
  );

  it('Show ship capacity in pounds', () => {
    expect(currentShip.showCapacityInPounds()).toBe(capacity);
  });
  it('Show ship average speed', () => {
    expect(currentShip.showAverageSpeed()).toBe(`${averageSpeed}nm`);
  });
});
