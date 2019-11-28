function drawListOfTrucks(outer, element) {
  let out = outer;
  const {
    truckAverageSpeed,
    truckCapacity,
    truckId,
    truckLicensePlate,
    truckModel,
    truckProducedYear,
    truckTypeOfGas,
  } = element;
  out += '<li>';
  out += '<ul>';
  out += `<li><b>Truck Id:</b> ${truckId}</li>`;
  out += `<li><b>Truck Model:</b> ${truckModel}</li>`;
  out += `<li><b>Truck Produced year:</b> ${truckProducedYear}</li>`;
  out += `<li><b>Truck Capacity:</b> ${truckCapacity}</li>`;
  out += `<li><b>Truck License plate:</b> ${truckLicensePlate}</li>`;
  out += `<li><b>Truck Average speed:</b> ${truckAverageSpeed}</li>`;
  out += `<li><b>Truck Count of team:</b> ${truckTypeOfGas}</li>`;
  out += '</ul>';
  out += '</li>';

  return out;
}

export default drawListOfTrucks;
