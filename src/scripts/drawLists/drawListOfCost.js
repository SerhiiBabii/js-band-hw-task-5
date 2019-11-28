function drawListOfCost(outer, element) {
  let out = outer;
  const { costTransportModel, costCargo, costDistance } = element;
  out += '<li>';
  out += '<ul>';
  out += `<li><b>Cost transport model:</b> ${costTransportModel}</li>`;
  out += `<li><b>Cost cargo:</b> ${costCargo}</li>`;
  out += `<li><b>Cost distance:</b> ${costDistance}</li>`;
  out += '</ul>';
  out += '</li>';

  return out;
}

export default drawListOfCost;
