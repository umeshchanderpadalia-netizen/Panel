import tripsData from "../data/trips";

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const getStatusColor = (
  status
) => {
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

const formatTrip = (
  trip
) => ({
  id:
    trip.id ||
    Date.now(),

  bookingId:
    trip.bookingId || "",

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
    new Date().toISOString(),
});

/* =========================
   Get Trips
========================= */

export async function getTrips() {
  await delay(900);

  return tripsData.map(
    formatTrip
  );
}

/* =========================
   Create Trip
========================= */

export async function createTrip(
  trip
) {
  await delay(700);

  return {
    success: true,
    message:
      "Booking created successfully.",
    data: formatTrip({
      ...trip,
      id: Date.now(),
    }),
  };
}

/* =========================
   Update Trip
========================= */

export async function updateTrip(
  updatedTrip
) {
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
}

/* =========================
   Delete Trip
========================= */

export async function deleteTrip(
  tripId
) {
  await delay(500);

  return {
    success: true,
    message:
      "Booking deleted successfully.",
    deletedId: tripId,
  };
}