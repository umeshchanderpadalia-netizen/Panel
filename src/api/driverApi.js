import driversData from "../data/drivers";

// Delay
const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Get Drivers
const getDrivers =
  async () => {

    await delay(700);

    return driversData;
  };

export {
  getDrivers,
};