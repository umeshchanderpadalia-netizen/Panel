import driversData from "../data/drivers";

// Delay
const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Get Drivers
const getDrivers =
  async () => {

    await delay(800);

    return driversData.map(
      (driver) => ({
        ...driver,

        lastActive:
          driver.status ===
          "Online"
            ? "Active now"
            : driver.status ===
              "On Trip"
            ? "On ride"
            : "Last seen 20 mins ago",
      })
    );
  };

export {
  getDrivers,
};