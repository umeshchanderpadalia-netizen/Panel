import {
  useEffect,
} from "react";

import {
  getDrivers,
} from "../api/driverApi";

import useAsync from "./useAsync";

function useDrivers() {

  const {
    data,
    setData,
    loading,
    error,
    execute,
  } = useAsync(
    getDrivers,
    false
  );

  // Fetch Drivers
  const fetchDrivers =
    async () => {

      const response =
        await execute();

      if (!response)
        return;

      const formattedDrivers =
        response.map(
          (driver) => ({

            id:
              driver.id,

            name:
              driver.name || "",

            phone:
              driver.phone || "",

            email:
              driver.email || "",

            vehicle:
              driver.vehicle || "",

            vehicleNumber:
              driver.vehicleNumber ||
              "",

            vehicleType:
              driver.vehicleType ||
              "",

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
              driver.rating ||
              0,

            earnings:
              driver.earnings ||
              "₹0",

            joiningDate:
              driver.joiningDate ||
              "",

            licenseNumber:
              driver.licenseNumber ||
              "",

            avatar:
              driver.avatar ||
              "",

            color:
              driver.color ||
              "text-emerald-400 bg-emerald-500/20",
          })
        );

      setData(
        formattedDrivers
      );
    };

  useEffect(() => {

    fetchDrivers();

  }, []);

  return {

    drivers:
      data || [],

    setDrivers:
      setData,

    loading,

    error,

    retry:
      fetchDrivers,
  };
}

export default useDrivers;