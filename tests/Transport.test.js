import Transport from '../src/scripts/models/Transport';

describe('Create transport', () => {
  const model = 'model';
  const capacity = 'capacity';
  const producedYear = 'producedYear';
  const averageSpeed = 'averageSpeed';

  const currentTransport = new Transport(
    model,
    capacity,
    producedYear,
    averageSpeed,
  );

  it('Show transport capacity in pounds', () => {
    expect(currentTransport.showCapacityInPounds()).toBe(capacity);
  });
});
