import tripsData from "../data/trips";

// Delay
const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Get Trips
const getTrips =
  async () => {

    await delay(900);

    return tripsData.map(
      (trip) => ({
        ...trip,

        createdAt:
          new Date().toLocaleDateString(
            "en-IN"
          ),
      })
    );
  };

// Create Trip
const createTrip =
  async (trip) => {

    await delay(700);

    return {
      success: true,

      data: {
        ...trip,

        id: Date.now(),

        createdAt:
          new Date().toLocaleDateString(
            "en-IN"
          ),
      },
    };
  };

export {
  getTrips,
  createTrip,
};