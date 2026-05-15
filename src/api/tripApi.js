import tripsData from "../data/trips";

// Delay
const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Get Trips
const getTrips = async () => {

  await delay(800);

  return tripsData;
};

// Create Trip
const createTrip =
  async (trip) => {

    await delay(600);

    return {
      success: true,
      data: trip,
    };
  };

export {
  getTrips,
  createTrip,
};