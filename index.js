// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function fareDoubler(fares) {
  return fares * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, driverSelectionFunction) {
  return driverSelectionFunction(arrayOfDrivers);
}
