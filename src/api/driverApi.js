import driversData from "../data/drivers";

// Simulated Network Delay
const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

// Status Colors
const getStatusColor =
  (status) => {

    switch (status) {

      case "Available":

        return "text-emerald-400 bg-emerald-500/20";

      case "On Trip":

        return "text-yellow-400 bg-yellow-500/20";

      case "Offline":

        return "text-red-400 bg-red-500/20";

      case "Inactive":

        return "text-zinc-400 bg-zinc-500/20";

      default:

        return "text-cyan-400 bg-cyan-500/20";
    }
  };

// Format Driver
const formatDriver =
  (driver) => ({

    id: driver.id,

    name:
      driver.name || "",

    phone:
      driver.phone || "",

    email:
      driver.email || "",

    vehicle:
      driver.vehicle || "",

    vehicleNumber:
      driver.vehicleNumber || "",

    vehicleType:
      driver.vehicleType || "",

    vendor:
      driver.vendor || "",

    location:
      driver.location || "",

    status:
      driver.status ||
      "Offline",

    availability:
      driver.availability ||
      "Offline",

    assignedTrips:
      driver.assignedTrips ||
      0,

    completedTrips:
      driver.completedTrips ||
      0,

    cancelledTrips:
      driver.cancelledTrips ||
      0,

    rating:
      driver.rating || 0,

    earnings:
      driver.earnings ||
      "₹0",

    joiningDate:
      driver.joiningDate || "",

    licenseNumber:
      driver.licenseNumber ||
      "",

    avatar:
      driver.avatar || "",

    color:
      driver.color ||
      getStatusColor(
        driver.status
      ),

    createdAt:
      driver.createdAt ||

      new Date().toLocaleDateString(
        "en-IN"
      ),
  });

// Get Drivers
const getDrivers =
  async () => {

    await delay(900);

    return driversData.map(
      formatDriver
    );
  };

// Create Driver
const createDriver =
  async (driver) => {

    await delay(700);

    const formattedDriver =
      formatDriver({
        ...driver,
        id: Date.now(),
      });

    return {
      success: true,

      message:
        "Driver created successfully.",

      data:
        formattedDriver,
    };
  };

// Update Driver
const updateDriver =
  async (updatedDriver) => {

    await delay(600);

    return {
      success: true,

      message:
        "Driver updated successfully.",

      data:
        formatDriver(
          updatedDriver
        ),
    };
  };

// Delete Driver
const deleteDriver =
  async (driverId) => {

    await delay(500);

    return {
      success: true,

      message:
        "Driver deleted successfully.",

      deletedId:
        driverId,
    };
  };

export {
  getDrivers,
  createDriver,
  updateDriver,
  deleteDriver,
};