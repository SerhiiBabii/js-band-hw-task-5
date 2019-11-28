import drawListOfCost from '../src/scripts/drawLists/drawListOfCost'

describe('drawListOfCost', () => {

    const costTransportModel = 'costTransportModel';
    const costCargo = 'costCargo';
    const costDistance = 'costDistance';

    const element = {
        costTransportModel,
        costCargo,
        costDistance,
    };

    const out = (
        '<li>' +
        '<ul>' +
        `<li><b>Cost transport model:</b> ${costTransportModel}</li>` +
        `<li><b>Cost cargo:</b> ${costCargo}</li>` +
        `<li><b>Cost distance:</b> ${costDistance}</li>` +
        '</ul>' +
        '</li>'
    );
  
    const currentDraw = drawListOfCost('', element);
  
    it('Show draw', () => {
      expect(currentDraw).toBe(out);
    });
  });