import {
  useEffect,
  useState,
} from "react";

import {
  getDrivers,
} from "../api/driverApi";

function useDrivers() {

  const [drivers, setDrivers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // Fetch Drivers
  const fetchDrivers =
    async () => {

      try {

        setLoading(true);

        setError("");

        const data =
          await getDrivers();

        // Future Backend Validation
        const formattedDrivers =
          data.map((driver) => ({

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
              driver.rating || 0,

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
              driver.avatar || "",

            color:
              driver.color ||
              "text-emerald-400 bg-emerald-500/20",
          }));

        setDrivers(
          formattedDrivers
        );

      } catch {

        setError(
          "Unable to load driver operations."
        );

      } finally {

        // Smooth Loading Effect
        setTimeout(() => {

          setLoading(false);

        }, 400);
      }
    };

  useEffect(() => {

    fetchDrivers();

  }, []);

  return {
    drivers,
    setDrivers,
    loading,
    error,
    retry:
      fetchDrivers,
  };
}

export default useDrivers;