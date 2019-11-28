function drawListOfShips(outer, element) {
  let out = outer;
  const {
    shipAverageSpeed,
    shipCapacity,
    shipId,
    shipName,
    shipModel,
    shipProducedYear,
    shipCountOfTeam,
  } = element;
  out += '<li>';
  out += '<ul>';
  out += `<li><b>Ship Id:</b> ${shipId}</li>`;
  out += `<li><b>Ship Model:</b> ${shipModel}</li>`;
  out += `<li><b>Ship Name:</b> ${shipName}</li>`;
  out += `<li><b>Ship Produced year:</b> ${shipProducedYear}</li>`;
  out += `<li><b>Ship Capacity:</b> ${shipCapacity}</li>`;
  out += `<li><b>Ship Average speed:</b> ${shipAverageSpeed}</li>`;
  out += `<li><b>Ship Count of team:</b> ${shipCountOfTeam}</li>`;
  out += '</ul>';
  out += '</li>';

  return out;
}

export default drawListOfShips;
