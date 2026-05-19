import tripsData from "../data/trips";

// Simulated Network Delay
const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Status Colors
const getStatusColor =
  (status) => {

    switch (status) {

      case "Completed":

        return "text-emerald-400 bg-emerald-500/20";

      case "Cancelled":

        return "text-red-400 bg-red-500/20";

      case "Confirmed":

        return "text-cyan-400 bg-cyan-500/20";

      case "Driver Assigned":

        return "text-blue-400 bg-blue-500/20";

      case "Pending":

        return "text-orange-400 bg-orange-500/20";

      default:

        return "text-yellow-400 bg-yellow-500/20";
    }
  };

// Format Trip
const formatTrip =
  (trip) => ({

    id: trip.id,

    customer:
      trip.customer || "",

    phone:
      trip.phone || "",

    pickup:
      trip.pickup || "",

    drop:
      trip.drop || "",

    rideDate:
      trip.rideDate || "",

    bookingType:
      trip.bookingType ||
      "One Way",

    driver:
      trip.driver || "",

    vehicle:
      trip.vehicle || "",

    vendor:
      trip.vendor || "",

    fare:
      trip.fare || "",

    paymentStatus:
      trip.paymentStatus ||
      "Pending",

    status:
      trip.status ||
      "Pending",

    color:
      trip.color ||
      getStatusColor(
        trip.status
      ),

    createdAt:
      trip.createdAt ||

      new Date().toLocaleDateString(
        "en-IN"
      ),
  });

// Get Trips
const getTrips =
  async () => {

    await delay(900);

    return tripsData.map(
      formatTrip
    );
  };

// Create Trip
const createTrip =
  async (trip) => {

    await delay(700);

    const formattedTrip =
      formatTrip({
        ...trip,
        id: Date.now(),
      });

    return {
      success: true,

      message:
        "Booking created successfully.",

      data:
        formattedTrip,
    };
  };

// Update Trip
const updateTrip =
  async (updatedTrip) => {

    await delay(600);

    return {
      success: true,

      message:
        "Booking updated successfully.",

      data:
        formatTrip(
          updatedTrip
        ),
    };
  };

// Delete Trip
const deleteTrip =
  async (tripId) => {

    await delay(500);

    return {
      success: true,

      message:
        "Booking deleted successfully.",

      deletedId:
        tripId,
    };
  };

export {
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip,
};