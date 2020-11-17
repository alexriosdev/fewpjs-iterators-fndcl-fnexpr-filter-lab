function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, initial) {
  return drivers.filter(driver => driver.charAt(0).toLowerCase() === initial.toLowerCase() || driver.substring(0, 2).toLowerCase() === initial.toLowerCase());
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}