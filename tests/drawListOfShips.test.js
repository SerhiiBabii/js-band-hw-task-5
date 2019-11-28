import drawListOfShips from '../src/scripts/drawLists/drawListOfShips'

describe('drawListOfShips', () => {

    const shipAverageSpeed = 'shipAverageSpeed';
    const shipCapacity = 'shipCapacity';
    const shipId = 'shipId';
    const shipName = 'shipName';
    const shipModel = 'shipModel';
    const shipProducedYear = 'shipProducedYear';
    const shipCountOfTeam = 'shipCountOfTeam';

    const element = {
        shipAverageSpeed,
        shipCapacity,
        shipId,
        shipName,
        shipModel,
        shipProducedYear,
        shipCountOfTeam,
    }

    const out = (
        '<li>' +
        '<ul>' +
        `<li><b>Ship Id:</b> ${shipId}</li>` +
        `<li><b>Ship Model:</b> ${shipModel}</li>` +
        `<li><b>Ship Name:</b> ${shipName}</li>` +
        `<li><b>Ship Produced year:</b> ${shipProducedYear}</li>` +
        `<li><b>Ship Capacity:</b> ${shipCapacity}</li>` +
        `<li><b>Ship Average speed:</b> ${shipAverageSpeed}</li>` +
        `<li><b>Ship Count of team:</b> ${shipCountOfTeam}</li>` +
        '</ul>' +
        '</li>'
    );
  
    const currentDraw = drawListOfShips('', element);
  
    it('Show draw', () => {
      expect(currentDraw).toBe(out);
    });
  });