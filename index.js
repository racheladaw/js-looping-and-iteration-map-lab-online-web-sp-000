function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
};

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let fullName = driver.split(' ');
    return { firstName: fullName[0], lastName: fullName[1] };
  });
};

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
};
